'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Lumbering Manual by Dormann', 'Artisan 2', '00055685') );
collection.addElement( new DeliveryElement('Sawdust Box', 'Artisan 2', '00055686') );
collection.addElement( new DeliveryElement('Calpheon High-end Display Case', 'Master 5', '00055687') );
collection.addElement( new DeliveryElement('Lumbering Manual by Karl Verdun', 'Artisan 2', '00055688') );
collection.addElement( new DeliveryElement('Sharp Compass Saw Box', 'Artisan 2', '00055689') );
collection.addElement( new DeliveryElement('Serendia Vanity', 'Master 6', '00055690') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement("Worker's Lunch", 'Skilled 7', '00055231') );
collection.addElement( new DeliveryElement('Bunch of Fresh Tulips', 'Skilled 7', '00055232') );
collection.addElement( new DeliveryElement('Water Buffalo Hide Backpack', 'Professional 2', '00055233') );
collection.addElement( new DeliveryElement('Cure-All Ointment', 'Skilled 7', '00055234') );
collection.addElement( new DeliveryElement('Leight Ale', 'Apprentice 2', '00055235') );
collection.addElement( new DeliveryElement('Northern Wheat Plantation Haystack', 'Professional 1', '00055236') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement("Alchemist's Red Reagent", 'Beginner 1', '00055103') );
collection.addElement( new DeliveryElement('Velian Crystal Glass', 'Apprentice 6', '00055105') );
collection.addElement( new DeliveryElement('Velian Black Opal', 'Artisan 2', '00055106') );
collection.addElement( new DeliveryElement('Fox Fur', 'Apprentice 4', '00055107') );
collection.addElement( new DeliveryElement('Tranan Lead Shot Chest', 'Beginner 1', '00055108') ); // exchange
collection.addElement( new DeliveryElement("Bartali's Odd Adventure", 'Beginner 1', '00055109') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement("Madame Pillaf's Ribbon Set", 'Skilled 1', '00055152') );
collection.addElement( new DeliveryElement('Dragon Statue of Oyun', 'Skilled 9', '00055155') );
collection.addElement( new DeliveryElement('Heidel First Aid Kit', 'Beginner 1', '00055156') );
collection.addElement( new DeliveryElement('Pure Iron Ore', 'Skilled 4', '00055159') );
collection.addElement( new DeliveryElement('Oriental Saber', 'Master 1', '00055592') );
collection.addElement( new DeliveryElement('Haso Celadon Porcelain', 'Master 9', '00055595') );
collectionSet.addCollection(collection);

collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Traditional Bashim Accessory', 'Beginner 1', '00055474') );
collection.addElement( new DeliveryElement('Occidental Noble Dress', 'Master 3', '00055475') );
collection.addElement( new DeliveryElement('Elder Stem Bunch', 'Master 4', '00055476') );
collection.addElement( new DeliveryElement('Voodoo Doll', 'Beginner 1', '00055480') );
collection.addElement( new DeliveryElement('Smoked Mountain Goat Meat', 'Master 5', '00055481') );
collection.addElement( new DeliveryElement('Cadry Iron Armor', 'Master 2', '00055482') );
collectionSet.addCollection(collection);

export { collectionSet as default }