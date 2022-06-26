"use strict";

const randomNumber = function * (end) {
	while(true) {
	yield Math.floor(Math.random() * end) + 1; 
	}
};


const random = randomNumber(200);