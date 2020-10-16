'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Mysterious Medicine', 'Beginner 1', '00055391') );
collection.addElement( new DeliveryElement('Pile of Duch Sunrise Herbs', 'Artisan 6', '00055392') );
collection.addElement( new DeliveryElement('Caviar', 'Professional 5', '00055385') );
collection.addElement( new DeliveryElement('Ambergris', 'Artisan 4', '00055386') );
collection.addElement( new DeliveryElement('Coarse Sun-Dried Salt', 'Professional 2', '00055389') );
collection.addElement( new DeliveryElement('Clam Box', 'Artisan 3', '00055390') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Epheria Fish Harpoon', 'Beginner 1', '00055211') );
collection.addElement( new DeliveryElement('Silver Fish Skin', 'Beginner 1', '00055212') );
collection.addElement( new DeliveryElement('Pearl Necklace', 'Artisan 9', '00055213') );
collection.addElement( new DeliveryElement('Epheria Floating Bomb', 'Professional 5', '00055214') );
collection.addElement( new DeliveryElement('Epheria Fish Oil', 'Skilled 8', '00055215') );
collection.addElement( new DeliveryElement('Fish Sausage', 'Professional 2', '00055216') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Pilava Pearl', 'Professional 6', '00055381') );
collection.addElement( new DeliveryElement('Whole King Crab', 'Skilled 10', '00055382') );
collection.addElement( new DeliveryElement('Opal Nugget', 'Skilled 8', '00055383') );
collection.addElement( new DeliveryElement('Bunch of Fire Flake Flowers', 'Artisan 1', '00055384') );
collection.addElement( new DeliveryElement('Palm Forest Boy Collection', 'Beginner 1', '00055493') );
collection.addElement( new DeliveryElement('Desert Landscape', 'Master 3', '00055494') );
collectionSet.addCollection(collection);

collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Swellfish Skin Wallet', 'Beginner 1', '00055393') );
collection.addElement( new DeliveryElement('Louruvian Oyster', 'Professional 10', '00055394') );
collection.addElement( new DeliveryElement('Orange Crab Shell', 'Professional 10', '00055387') );
collection.addElement( new DeliveryElement('Truffle Mushroom Seedling', 'Beginner 1', '00055388') );
collection.addElement( new DeliveryElement('Bunch of Saffron', 'Artisan 2', '00055395') );
collection.addElement( new DeliveryElement('Sack of Fine Sand', 'Artisan 9', '00055396') );
collectionSet.addCollection(collection);

collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Randis Ray Hide', 'Professional 2', '00055399') );
collection.addElement( new DeliveryElement('Bunch of Blue Roses', 'Beginner 1', '00055400') );
collection.addElement( new DeliveryElement('Big Beryl', 'Professional 1', '00055397') );
collection.addElement( new DeliveryElement('Dried Herb Leaf', 'Professional 9', '00055398') );
collection.addElement( new DeliveryElement('Seagull Egg', 'Professional 6', '00055401') );
collection.addElement( new DeliveryElement('Gentian Wine', 'Master 1', '00055402') );
collectionSet.addCollection(collection);

export { collectionSet as default };