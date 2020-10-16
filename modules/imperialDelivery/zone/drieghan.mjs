'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Behr Bugle', 'Professional 2', '00055283') );
collection.addElement( new DeliveryElement('Trained Pigeon', 'Beginner 1', '00055284') );
collection.addElement( new DeliveryElement('Behr Sausage', 'Skilled 7', '00055285') );
collection.addElement( new DeliveryElement('Behr Leather Fabric', 'Professional 7', '00055286') );
collection.addElement( new DeliveryElement('Root Nymph Pickled Fish', 'Artisan 6', '00055306') );
collection.addElement( new DeliveryElement('Trident Arrowhead', 'Skilled 7', '00055307') );
collectionSet.addCollection(collection);

collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Home Medicine Brewer', 'Beginner 1', '00055130') );
collection.addElement( new DeliveryElement('Love Potion No. 6', 'Apprentice 10', '00055131') );
collection.addElement( new DeliveryElement('Olvia Mountain Cheese', 'Professional 2', '00055132') );
collection.addElement( new DeliveryElement('Emergency Medicine Set', 'Apprentice 2', '00055133') );
collection.addElement( new DeliveryElement('Shaia Traditional Hat', 'Beginner 1', '00055134') );
collection.addElement( new DeliveryElement('Olvia Grape Jam', 'Beginner 1', '00055135') );
collectionSet.addCollection(collection);

collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Valtarra Hearthstone', 'Master 11', '00055575') );
collection.addElement( new DeliveryElement('Ash Gray Branch', 'Master 11', '00055576') );
collection.addElement( new DeliveryElement('Biographies of Great Trainers', 'Master 15', '00055580') );
collection.addElement( new DeliveryElement('Kamasylvia Ancient Pandects', 'Master 15', '00055581') );
collection.addElement( new DeliveryElement('Acher Longbow', 'Master 12', '00055587') );
collection.addElement( new DeliveryElement('Lemoria Military Uniform', 'Master 10', '00055589') );
collectionSet.addCollection(collection);

collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Shuri Farm Sweet Potato Starch', 'Professional 6', '00055343') );
collection.addElement( new DeliveryElement('Spider Web Pants', 'Master 2', '00055344') );
collection.addElement( new DeliveryElement('Stonetail Hills Garlic Bread', 'Artisan 3', '00055345') );
collection.addElement( new DeliveryElement('Horsehair Brush', 'Beginner 1', '00055346') );
collection.addElement( new DeliveryElement('Horse Race Trophy', 'Artisan 9', '00055347') );
collection.addElement( new DeliveryElement('Rhino Stone Hide', 'Artisan 2', '00055348') );
collectionSet.addCollection(collection);

export { collectionSet as default };