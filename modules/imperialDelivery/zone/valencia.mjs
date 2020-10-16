'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Oceanic Coral', 'Master 2', '00055486') );
collection.addElement( new DeliveryElement('Natural Sponge', 'Beginner 1', '00055487') );
collection.addElement( new DeliveryElement('Sea Bass Jerky', 'Master 4', '00055488') );
collection.addElement( new DeliveryElement('Iliya Salt Pot', 'Beginner 1', '00055127') );
collection.addElement( new DeliveryElement('Lucky Fish Statue', 'Skilled 2', '00055128') );
collection.addElement( new DeliveryElement('Iliya Coral', 'Artisan 2', '00055129') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Red Reagent', 'Master 2', '00055483') );
collection.addElement( new DeliveryElement('Portable Cannon', 'Master 4', '00055484') );
collection.addElement( new DeliveryElement('Bunch of Ivory', 'Master 3', '00055485') );
collection.addElement( new DeliveryElement('Red Kite', 'Master 4', '00055594') );
collection.addElement( new DeliveryElement('Haso Silk', 'Master 6', '00055598') );
collection.addElement( new DeliveryElement('Outlaw Textbook', 'Beginner 1', '00055495') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Natural Pigment Set', 'Beginner 1', '00055461') );
collection.addElement( new DeliveryElement('Dried Raw Basilisk Skin', 'Beginner 1', '00055462') );
collection.addElement( new DeliveryElement('Ivory Seal', 'Master 3', '00055463') );
collection.addElement( new DeliveryElement('Dried Star Anise', 'Master 2', '00055464') );
collection.addElement( new DeliveryElement('Mace', 'Master 4', '00055465') );
collection.addElement( new DeliveryElement('Camel Fur Coat', 'Master 4', '00055466') );
collectionSet.addCollection(collection);

export { collectionSet as default };