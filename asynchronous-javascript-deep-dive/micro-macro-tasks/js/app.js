"use strict";

const massiveProcess = function(num) {
    return new Promise(function(resolve, reject) {
        if (isNaN(num)) {
            reject("Please enter a number!");
        } else {
            let result = 0;
            setTimeout(function() {
                for (let i = num ** 7; i >= 0; i--) {        
                    result += Math.atan(i) * Math.tan(i);
                };
                resolve(result);
            }, 0);
        }
    });
};

massiveProcess(10)
    .then(function(amt) {
        console.log("The number is: " + amt);
    })
    .catch(function(msg) {
        console.error(msg);
    });

console.log(5 * 5 + 100);
