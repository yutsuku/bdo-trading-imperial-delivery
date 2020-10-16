'use strict';

class DeliveryCollectionSet
{
    /**
     * @var {DeliveryCollection}[]
     */
    sets = [];

    /**
     * @param {DeliveryCollection} collection
     */
    addCollection(collection)
    {
        this.sets.push(collection);
    }

    get sets()
    {
        return this.sets;
    }
}

export { DeliveryCollectionSet as default };