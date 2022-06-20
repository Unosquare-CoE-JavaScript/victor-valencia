"use strict";

let firstName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Alessa");
        }, 1000);
    });
};

let middleName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Victoria");
        }, 7000);
    });
};

let lastName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Valencia");
        }, 3000);
    });
};

Promise.race([firstName(), lastName(), middleName()])
    .then(function(msg) {
        console.log(msg);
        //console.log(msg[0] + " " + msg[1] + " " + msg[2]);
    })
    .catch(function(msg) {
        console.log(msg);
    });