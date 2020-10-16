'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();

collection.addElement( new DeliveryElement('Ranger Strategic Manual: Basic', 'Master 6', '00055551') );
collection.addElement( new DeliveryElement('Ranger Training Manual: Basic', 'Master 7', '00055552') );
collection.addElement( new DeliveryElement('Medical Kit', 'Master 8', '00055553') );
collection.addElement( new DeliveryElement('Delicate Ornament', 'Master 9', '00055554') );
collection.addElement( new DeliveryElement('Atanis Music Score', 'Master 10', '00055555') );
collection.addElement( new DeliveryElement('Evil Spirit Rock', 'Master 11', '00055556') );

collectionSet.addCollection(collection);


collection = new DeliveryCollection();

collection.addElement( new DeliveryElement('Steel Tree Bark', 'Professional 5', '00055276') );
collection.addElement( new DeliveryElement('Trent Carpentry Tool', 'Beginner 1', '00055277') );
collection.addElement( new DeliveryElement('Spirit of Earth Sculpture', 'Beginner 1', '00055278') );
collection.addElement( new DeliveryElement('Trent Specialty Wood', 'Artisan 9', '00055279') );
collection.addElement( new DeliveryElement('Forest Camouflage', 'Professional 3', '00055280') );
collection.addElement( new DeliveryElement('Amber Accessory', 'Artisan 5', '00055281') );

collectionSet.addCollection(collection);


collection = new DeliveryCollection();

collection.addElement( new DeliveryElement('Sour Foretta Wild Berries', 'Master 6', '00055563') );
collection.addElement( new DeliveryElement('Sweet Foretta Wild Berries', 'Master 7', '00055564') );
collection.addElement( new DeliveryElement('Sunrise Herb in the Sunset', 'Master 8', '00055565') );
collection.addElement( new DeliveryElement('Moist Dry Mane Grass', 'Master 9', '00055566') );
collection.addElement( new DeliveryElement('Cabin Maintenance Tools', 'Master 10', '00055567') );
collection.addElement( new DeliveryElement('Colorful Wild Berry Juice', 'Master 11', '00055568') );

collectionSet.addCollection(collection);


collection = new DeliveryCollection();

collection.addElement( new DeliveryElement('Pack of Old Books', 'Beginner 1', '00055243') );
collection.addElement( new DeliveryElement('Bunch of High-Quality Parchment', 'Artisan 5', '00055244') );
collection.addElement( new DeliveryElement('Valkyrie Painkiller', 'Professional 8', '00055245') );
collection.addElement( new DeliveryElement("Oberen's Mushroom Seedling", 'Beginner 1', '00055258') );
collection.addElement( new DeliveryElement('Grilled Kuku Bird Egg', 'Professional 9', '00055259') );
collection.addElement( new DeliveryElement('Bain Corn Noodles', 'Professional 8', '00055261') );

collectionSet.addCollection(collection);


collection = new DeliveryCollection();

collection.addElement( new DeliveryElement('Drieghan Traditional Cracker', 'Artisan 6', '00055673') );
collection.addElement( new DeliveryElement('Special Maopan Corn Soup', 'Artisan 10', '00055674') );
collection.addElement( new DeliveryElement('High-Quality Liquid Fertilizer', 'Artisan 2', '00055675') );
collection.addElement( new DeliveryElement('Thuja Scented Candle', 'Artisan 6', '00055679') );
collection.addElement( new DeliveryElement('Sherekhan Talisman', 'Artisan 9', '00055680') );
collection.addElement( new DeliveryElement('Anti-Marmot Trap', 'Artisan 2', '00055681') );

collectionSet.addCollection(collection);

export { collectionSet as default };