'use strict';

import { ranks } from './../skillRanks.mjs';

class DeliveryCollection
{
    /**
     * @var {DeliveryElement}[]
     */
    elements = [];
    /**
     * @var {string}
     */
    _target;

    /**
     * @param {string} npcName
     */
    set target(npcName)
    {
        this._target = npcName;
    }

    /**
     * @returns {string}
     */
    get target()
    {
        return this._target;
    }

    /**
     * @param {DeliveryElement} element 
     */
    addElement(element)
    {
        this.elements.push(element);
    }


    /**
     * @return {number}
     */
    rank()
    {
        let highest = 0;
        this.elements.forEach( (element, index) => {
            if (element.rank > highest) {
                highest = element.rank;
            }
        });

        return highest;
    }

    rankAsName()
    {
        return ranks[this.rank()];
    }
}

export { DeliveryCollection as default };