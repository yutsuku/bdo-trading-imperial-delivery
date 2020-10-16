'use strict';

import { ranks } from './modules/skillRanks.mjs';
import { htmlToElement, htmlToNodeList } from './modules/utils.mjs';
import balenosCollectionSet from './modules/imperialDelivery/zone/balenos.mjs';
import serendiaCollectionSet from './modules/imperialDelivery/zone/serendia.mjs';
import calpheonCollectionSet from './modules/imperialDelivery/zone/calpheon.mjs';
import mediahCollectionSet from './modules/imperialDelivery/zone/mediah.mjs';
import valenciaCollectionSet from './modules/imperialDelivery/zone/valencia.mjs';
import margoriaCollectionSet from './modules/imperialDelivery/zone/margoria.mjs';
import kamasylviaCollectionSet from './modules/imperialDelivery/zone/kamasylvia.mjs';
import drieghanCollectionSet from './modules/imperialDelivery/zone/drieghan.mjs';

const iconRoot = (window.origin.indexOf('127.0.0.1') !== -1 ?
    './icon/' :
    '//github.com/yutsuku/bdo-trading-imperial-delivery/blob/master/'
);

const zoneData = {
    balenos: balenosCollectionSet,
    serendia: serendiaCollectionSet,
    calpheon: calpheonCollectionSet,
    mediah: mediahCollectionSet,
    valencia: valenciaCollectionSet,
    margoria: margoriaCollectionSet,
    kamasylvia: kamasylviaCollectionSet,
    drieghan: drieghanCollectionSet
};
let territoryData = [];

function populatePlayerRank() {
    let playerRank = document.querySelector('#player-rank');

    // presistent data
    let storageIndex = localStorage.getItem('rank');
    let presistentIndex = -1;

    if (storageIndex) {
        storageIndex = Number(storageIndex);
        if (storageIndex > 0 && storageIndex < ranks.length) {
            presistentIndex = storageIndex;

            let rankBase = ranks[presistentIndex].split(' ')[0].toLowerCase();
            playerRank.classList.add(`rank-${rankBase}`);
        }
    }

    ranks.forEach( (rank, index) => {
        let rankBase = rank.split(' ')[0].toLowerCase();
        let element = htmlToElement(`<option ${ (index === presistentIndex ? 'selected="selected"' : '') } 
            value="${index}"
            class="rank-${rankBase}">
                ${rank}
            </option>`);
        playerRank.appendChild(element);
    });

    playerRank.addEventListener('change', function() {
        const prefix = "rank-";
        const classes = this.className.split(' ').filter(c => !c.startsWith(prefix));
        this.className = classes.join(' ').trim();

        const selected = getPlayerRank();
        let rankBase = ranks[selected].split(' ')[0].toLowerCase();
        this.classList.add(`rank-${rankBase}`);
        this.blur();

        localStorage.setItem('rank', selected);

        updateAllCollections(zoneData, territoryData);
    }, false);
}

function getPlayerRank() {
    let playerRank = document.querySelector('#player-rank');
    return playerRank.value;
}

function changeCollectionHandler(value, territory, zoneData, territoryData) {
    territory.index += value;

    if (territory.index+1 > territory.maxValue) {
        territory.index = 0;
    } else if (territory.index < 0) {
        territory.index = territory.maxValue-1;
    }

    localStorage.setItem(`territory-${territory.territory}`, territory.index);

    setCollectionData(territory.node, zoneData, territoryData);
}

function previousHandler(event) {
    changeCollectionHandler(
        -1,
        event.currentTarget.territory,
        event.currentTarget.zoneData,
        event.currentTarget.territoryData
    );
}

function nextHandler(event) {
    changeCollectionHandler(
        1,
        event.currentTarget.territory,
        event.currentTarget.zoneData,
        event.currentTarget.territoryData
    );
}

function setCollectionData(territoryContainer, zoneData, territoryData) {
    let territoryId = territoryContainer.dataset.territory;
    let itemsDom = territoryContainer.querySelector('.trade-items');
    let lowRankDom = territoryContainer.querySelector('.low-rank');
    let buttonPrevious = territoryContainer.querySelector('[data-step="previous"]');
    let buttonNext = territoryContainer.querySelector('[data-step="next"]');

    territoryContainer.classList.remove('bad');
    lowRankDom.classList.add('hidden');

    while (itemsDom.firstChild) {
        itemsDom.firstChild.remove();
    }

    let territory = territoryData.find(obj => obj.territory == territoryId);
    let collection = zoneData[territoryId]?.sets[territory.index];
    if (collection === undefined) {
        console.warn(`tried accessing "zoneData" with key "${territoryId}" but result was empty!`);
        return;
    }

    let collectionRank = collection.rank();
    let collectionRankName = collection.rankAsName();

    territoryContainer.dataset.tradeLevel = collectionRank;
    territoryContainer.dataset.tradeRank = collectionRankName;

    if (getPlayerRank() < collectionRank) {
        territoryContainer.classList.add('bad');

        let rankBase = collectionRankName.split(' ')[0].toLowerCase();
        lowRankDom.innerHTML = `requires <span class="rank-${rankBase}">${collectionRankName}</span>`;
        lowRankDom.classList.remove('hidden');
    }

    collection?.elements.forEach( (tradeItem) => {
        let rankTooltip = tradeItem.rankAsName();
        if (rankTooltip === undefined) {
            rankTooltip = 'Missing Trade data for this item';
        }
        let html = htmlToElement(`
        <div class="trade-item">
            <img src="${iconRoot}${tradeItem.icon}.png"
                title="${tradeItem.name}\n${rankTooltip}"
                alt="${tradeItem.name}\n${rankTooltip}" />
        </div>`);
        itemsDom.appendChild(html);
    });

    delete buttonPrevious.territory;
    delete buttonPrevious.zoneData;
    delete buttonPrevious.territoryData;

    delete buttonNext.territory;
    delete buttonNext.zoneData;
    delete buttonNext.territoryData;

    buttonPrevious.removeEventListener('click', previousHandler, false);
    buttonNext.removeEventListener('click', nextHandler, false);

    buttonPrevious.addEventListener('click', previousHandler, false);
    buttonNext.addEventListener('click', nextHandler, false);

    buttonPrevious.territory = territory;
    buttonPrevious.zoneData = zoneData;
    buttonPrevious.territoryData = territoryData;

    buttonNext.territory = territory;
    buttonNext.zoneData = zoneData;
    buttonNext.territoryData = territoryData;
}

function updateTerritoryData() {
    let territoriesDom = document.querySelectorAll('[data-territory]');
    let territoryData = [];

    territoriesDom.forEach( (territoryContainer) => {
        if (zoneData[territoryContainer.dataset.territory] === undefined) {
            console.warn(`"zoneData" is missing key "${territoryContainer.dataset.territory}"`);
            return true;
        }

        let presistentIndex = 0;

        // presistent data
        let storageIndex = localStorage.getItem(`territory-${territoryContainer.dataset.territory}`);
        if (storageIndex) {
            storageIndex = Number(storageIndex);
            if (storageIndex > 0 && storageIndex < zoneData[territoryContainer.dataset.territory].sets.length) {
                presistentIndex = storageIndex;
            }
        }

        territoryData.push(
            {
                territory: territoryContainer.dataset.territory,
                index: presistentIndex,
                maxValue: zoneData[territoryContainer.dataset.territory].sets.length,
                node: territoryContainer
            }
        );
    });

    return territoryData;
}

function updateAllCollections(zoneData, territoryData) {
    let territoriesDom = document.querySelectorAll('[data-territory]');

    territoriesDom.forEach( (territoryContainer) => {
        setCollectionData(territoryContainer, zoneData, territoryData);
    });
}

populatePlayerRank();
territoryData = updateTerritoryData();
updateAllCollections(zoneData, territoryData);
