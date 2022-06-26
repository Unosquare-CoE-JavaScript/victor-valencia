"use strict";

let firstName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Alessa");
        }, 5000);
    });
};

let middleName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Victoria");
        }, 3000);
    });
};

let lastName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Valencia");
        }, 5000);
    });
};

(async function() {
    let names = await Promise.allSettled([firstName(), middleName(), lastName()]);
    console.log(names);
})();

/*Promise.race([firstName(), lastName(), middleName()])
    .then(function(msg) {
        console.log(msg);
        //console.log(msg[0] + " " + msg[1] + " " + msg[2]);
    })
    .catch(function(msg) {
        console.log(msg);
    });*/