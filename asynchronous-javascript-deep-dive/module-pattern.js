"use strict";

function communication() {
    let greet = "Hello ",
        goodbbye = "So long ";
    
    const getGreet = function () {
        let d = new Date();
        if(d.toLocaleTimeString().includes('AM')) {
            greet = " Godd Morning ";
        } else {
            greet = "Hello ";
        }
        return greet
    };

    const greeting = function (name) {
        console.log(`${getGreet() + name}! Welcome to the course.`);
    };

    return {
        greetUser: greeting
    };
}