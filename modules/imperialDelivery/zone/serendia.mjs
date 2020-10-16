'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Nouveranto Net', undefined, '00055376') );
collection.addElement( new DeliveryElement("Mariam's Sandwich", 'Artisan 9', '00055355') );
collection.addElement( new DeliveryElement('Blue Silk Fabric', 'Skilled 9', '00055357') );
collection.addElement( new DeliveryElement('Jeweled Dagger', 'Artisan 2', '00055354') );
collection.addElement( new DeliveryElement('Home First Aid Kit', 'Professional 5', '00055356') );
collection.addElement( new DeliveryElement("Barbarian's Oval Shield", 'Artisan 4', '00055358') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Stimi Chandelier', 'Artisan 7', '00055201') );
collection.addElement( new DeliveryElement('Aurobyl Fabric', 'Skilled 7', '00055202') );
collection.addElement( new DeliveryElement('Pallet Moving Set', 'Beginner 1', '00055203') );
collection.addElement( new DeliveryElement('Packaged Pig Barbecue', 'Skilled 9', '00055204') );
collection.addElement( new DeliveryElement('Cannon Mold', 'Master 1', '00055205') );
collection.addElement( new DeliveryElement('Calpheon Workshop Steel Ingot', 'Artisan 2', '00055206') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Drieghan Traditional Fur Hat', 'Artisan 2', '00055661') );
collection.addElement( new DeliveryElement('Colorful Embroidered Horse Gear Set', 'Artisan 2', '00055662') );
collection.addElement( new DeliveryElement("Aro's Special Basket", 'Artisan 2', '00055663') );
collection.addElement( new DeliveryElement('Celestial Windchime', 'Artisan 2', '00055664') );
collection.addElement( new DeliveryElement('Celestial Ocarina', 'Artisan 2', '00055665') );
collection.addElement( new DeliveryElement('Dragonhead Kettle', 'Master 2', '00055666') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Black Leopard Sculpture', 'Professional 1', '00055246') );
collection.addElement( new DeliveryElement('Ominous Black Mercury', 'Professional 1', '00055247') );
collection.addElement( new DeliveryElement('Ominous Black Ore', 'Artisan 7', '00055249') );
collection.addElement( new DeliveryElement("Miner's Work Uniform", 'Professional 5', '00055250') );
collection.addElement( new DeliveryElement('Anti-Petrifying Amulet', 'Beginner 1', '00055251') );
collection.addElement( new DeliveryElement('Keplan Ginger Tea', 'Artisan 6', '00055252') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Velian Smoked Chicken', 'Beginner 1', '00055101') );
collection.addElement( new DeliveryElement('Velian Wine', 'Beginner 1', '00055102') );
collection.addElement( new DeliveryElement("Alchemist's Blue Reagent", 'Apprentice 2', '00055104') );
collection.addElement( new DeliveryElement('Velian Plank', 'Professional 2', '00055110') );
collection.addElement( new DeliveryElement('Dim Lotus Lamp', 'Master 7', '00055593') );
collection.addElement( new DeliveryElement('Millennial Wild Ginseng', 'Master 7', '00055599') );
collectionSet.addCollection(collection);

export { collectionSet as default };