"use strict";

/*const plainFunction = async function() {
	console.log('start');
	return 'done';
};

var result = plainFunction();*/

const asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("important value");
        }, 2000);
    }, function() {
        reject('operation canceled');
    })
};

const asyncFun = async function() {
	let p1 = await asyncFunction();
	console.log(p1);
	console.log(`${p1} more info`);
}

asyncFun();
