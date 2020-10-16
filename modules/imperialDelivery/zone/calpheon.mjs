'use strict';

import DeliveryCollection  from './../DeliveryCollection.mjs';
import DeliveryCollectionSet from './../DeliveryCollectionSet.mjs';
import DeliveryElement from './../DeliveryElement.mjs';

const collectionSet = new DeliveryCollectionSet();

let collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Glish Mud Brick', 'Apprentice 7', '00055172') );
collection.addElement( new DeliveryElement('Magic Binding Oak Branch', 'Beginner 1', '00055173') );
collection.addElement( new DeliveryElement('Fogan Skin Oil', 'Skilled 5', '00055174') );
collection.addElement( new DeliveryElement('Dried Fogan Hind Leg', 'Apprentice 7', '00055175') );
collection.addElement( new DeliveryElement("Freharau's Dry Mud", 'Beginner 1', '00055176') );
collection.addElement( new DeliveryElement("Freharau's Restorative", 'Skilled 7', '00055177') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement("Imp's Red Ore", 'Beginner 1', '00055111') );
collection.addElement( new DeliveryElement('Imp Totem Fragment', 'Beginner 1', '00055112') );
collection.addElement( new DeliveryElement('Tree Spirit Seed', 'Beginner 1', '00055113') );
collection.addElement( new DeliveryElement('Ogre Excrement', 'Apprentice 2', '00055114') );
collection.addElement( new DeliveryElement('Oriental Spice', 'Master 10', '00055596') );
collection.addElement( new DeliveryElement('Golden Dragon Ink Slab', 'Master 5', '00055597') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Weenie Looney Pharmacy Book', 'Master 17', '00055578') );
collection.addElement( new DeliveryElement('Dew of White Wood Forest', 'Master 11', '00055579') );
collection.addElement( new DeliveryElement('Flondor Spring Water', 'Master 12', '00055584') );
collection.addElement( new DeliveryElement('Sylviarona', 'Master 11', '00055585') );
collection.addElement( new DeliveryElement('Flondor Jade Clam', 'Master 12', '00055586') );
collection.addElement( new DeliveryElement('Flondor Crystal Plant', 'Master 16', '00055588') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Kasula Cinnamon Powder', 'Skilled 10', '00055340') );
collection.addElement( new DeliveryElement('Pot with Black Spirit', 'Beginner 1', '00055359') );
collection.addElement( new DeliveryElement('Soul-Bearing Portrait', 'Artisan 7', '00055360') );
collection.addElement( new DeliveryElement('Supernatural Elixir', 'Professional 6', '00055361') );
collection.addElement( new DeliveryElement('Healing Potion', 'Professional 2', '00055362') );
collection.addElement( new DeliveryElement("Kirus' Talisman", 'Artisan 2', '00055363') );
collectionSet.addCollection(collection);


collection = new DeliveryCollection();
collection.addElement( new DeliveryElement('Yak Carpet', 'Master 3', '00055667') );
collection.addElement( new DeliveryElement('Thuja Pinwheel', 'Artisan 2', '00055668') );
collection.addElement( new DeliveryElement('Sherekhan Flag Decoration', 'Artisan 7', '00055669') );
collection.addElement( new DeliveryElement('Khalk Teeth Decorated with Gemstone', 'Artisan 9', '00055670') );
collection.addElement( new DeliveryElement('Crispy Skewered Lamb', 'Artisan 5', '00055671') );
collection.addElement( new DeliveryElement('Altitude Sickness Cure', 'Artisan 4', '00055672') );
collectionSet.addCollection(collection);

export { collectionSet as default };