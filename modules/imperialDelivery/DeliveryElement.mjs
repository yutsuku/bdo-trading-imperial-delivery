'use strict';

import { ranks } from './../skillRanks.mjs';

class DeliveryElement
{
    _rank = -1;
    name;
    icon;

    constructor(name, rank, icon)
    {
        this.name = name;
        this.setRankByName(rank);

        if (icon) {
            this.icon = icon;
        }
    }

    /**
     * @param {string} value
     */
    set name(value)
    {
        this.name = value;
    }

    /**
     * @returns {string}
     */
    get name()
    {
        return this.name;
    }

    /**
     * @param {string} value
     */
    set icon(value)
    {
        this.icon = value;
    }

    /**
     * @returns {string}
     */
    get icon()
    {
        return this.icon;
    }

    /**
     * @param {string} rank
     */
    setRankByName(rank)
    {
        let index = ranks.findIndex(element => element === rank);
        this._rank = index;
    }

    /**
     * @param {number} index
     */
    setRankByIndex(index)
    {
        this._rank = index;
    }

    /**
     * @returns {number}
     */
    get rank()
    {
        if (this._rank === -1) {
            console.warn(`"${this.name}" is missing trade rank data`);
        }
        return this._rank;
    }

    rankAsName()
    {
        return (ranks[this._rank] !== undefined ? ranks[this._rank] : undefined);
    }
}

export { DeliveryElement as default };