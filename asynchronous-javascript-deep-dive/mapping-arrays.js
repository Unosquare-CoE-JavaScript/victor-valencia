"use strict";

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*let square = num.map(function(val) {
	return val * val;
});*/

/*let product = function(val) {
	return val * val;
};

let square = num.map(product);
let quad = num.map(product).map(product);*/

let obj = num.map(function(val, index, arr) {
	return {
		index: index,
		val: val,
		square: val ** 2,
		cube: val ** 3,
		quad: val ** 3,
		origArray: arr
	};
});
