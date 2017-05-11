"use strict";
console.log("Hello Cupcakes are great");

let Handlebars = require('hbsfy/runtime'),
	cakeInventory = require('./bakery.js'),
	cakeTemplate = require('../hb/cake-grid.hbs'),
	cakeEvents = require('./events.js'),
	welcomeTemplate = require('../hb/welcome.hbs'),
	welcomeData = require('../hb/welcome-data.js');

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);

let content = welcomeTemplate(welcomeData);
	$('#welcome').append(content);

cakeInventory.loadInventory()
.then( (inventoryFromLoadInventoryResolve) => {
	console.log("cake promise", inventoryFromLoadInventoryResolve);
	populatePage(inventoryFromLoadInventoryResolve);
	cakeEvents();
	},
	(reason) => {
		console.log("something went really wrong, sorry to break your heart");
	}
);

function populatePage(stuff) {
	let newDiv = document.createElement("div");
	newDiv.innerHTML = cakeTemplate(stuff);
	$('#cake-cards').append(newDiv);
}