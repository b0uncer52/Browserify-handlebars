"use strict";

let inventory = [];
let bakery = {};

bakery.loadInventory = () => {
	return new Promise( function(resolve, reject) {
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "./inventory.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function(){
			var data = JSON.parse(this.responseText);

			resolve(data);
		});
	});
};

module.exports = bakery;