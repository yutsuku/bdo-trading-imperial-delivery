'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Ball of Cobweb', 'Artisan 9', '00055368') );
collection.addElement( new DeliveryElement('Kushan Smoked Beef', 'Professional 2', '00055369') );
collection.addElement( new DeliveryElement('Spider Anesthetic', 'Professional 6', '00055370') );
collection.addElement( new DeliveryElement('Warm Blanket', 'Master 10', '00055371') );
collection.addElement( new DeliveryElement('Ratt Lacquer Ware', 'Master 2', '00055591') );
collection.addElement( new DeliveryElement('Pure Gold Censer', 'Master 8', '00055600') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Teviral Scented Candle', 'Skilled 7', '00055207') );
collection.addElement( new DeliveryElement("Emperor's Portriat", 'Professional 5', '00055208') );
collection.addElement( new DeliveryElement('Calpheon Slum Antique', 'Beginner 1', '00055209') );
collection.addElement( new DeliveryElement('Calpheon Slum Aid', 'Skilled 7', '00055210') );
collection.addElement( new DeliveryElement('Contaminated Herb Bundle', 'Skilled 7', '00055237') );
collection.addElement( new DeliveryElement('Troll Hunting Poison', 'Professional 6', '00055238') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Heidel Knights Martial Arts Manual', 'Beginner 1', '00055151') );
collection.addElement( new DeliveryElement('Cutting-Edge Dwarf Tool Pack', 'Beginner 1', '00055153') );
collection.addElement( new DeliveryElement('275 Year-Old Porodonio Wine', 'Artisan 2', '00055154') );
collection.addElement( new DeliveryElement("Lebyos' Leather Shoes", 'Apprentice 7', '00055157') );
collection.addElement( new DeliveryElement('Wishing Kite', 'Beginner 1', '00055158') );
collection.addElement( new DeliveryElement('Heidel Cocktail Dress', 'Professional 1', '00055160') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Mediah Medical Supply', 'Master 4', '00055349') );
collection.addElement( new DeliveryElement("Mediah Straggler's Bent", 'Professional 7', '00055350') );
collection.addElement( new DeliveryElement('Horoscope Crystal Ball', 'Beginner 1', '00055351') );
collection.addElement( new DeliveryElement('Eastern Culture', 'Beginner 1', '00055352') );
collection.addElement( new DeliveryElement('Shabby Sculpture', 'Master 1', '00055353') );
collection.addElement( new DeliveryElement('Abandoned Iron Mine Quartz Nugget', 'Professional 1', '00055372') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Valentine Salve', 'Skilled 7', '00055217') );
collection.addElement( new DeliveryElement('Caphras Steamer', 'Beginner 1', '00055218') );
collection.addElement( new DeliveryElement('Florin Scented Candle', 'Artisan 7', '00055219') );
collection.addElement( new DeliveryElement('Nymph Costume Set', 'Professional 6', '00055220') );
collection.addElement( new DeliveryElement('Dried Cornelian Cherry', 'Professional 1', '00055221') );
collection.addElement( new DeliveryElement('Mossy Ancient Statue', 'Artisan 7', '00055230') );
collectionSet.addCollection(collection);

export { collectionSet as default };