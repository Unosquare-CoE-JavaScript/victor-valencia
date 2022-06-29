"use strict";
// ==================Values=====================

/* var firstName = "Victoria";

console.log("My name is '${ firstName }'.");
console.log('My name is', firstName);
console.log(`My name is ${firstName}.`);

while (false) {
    console.log(3.141592);
}

var names = ["Laura", "Monica", "Patrick"]

console.log(`My name is ${names[1]}.`);

var a;

if (a === undefined) {
    console.log('a is undefined');
}

if (a === null) {
    console.log('a is null');
}


var obj = {
    first: "Victoria",
    last: "Valencia",
    age: 32,
    specialties: ["JS", "Table Tennis"]
};

console.log(`My name is ${obj.first}.`);
console.log(`My name is ${obj['first']}.`);

var array = [42, "abc", true, undefined, null, { "a": 1 }, [1, 2, 3], function hello() { }];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(typeof element);
} */

// ===============Declaring and using variables=======

/* var adult = true;
if (adult) {
    var firstName = "Victoria";
    // let age = 39;
    console.log("Shhh, this is a secret!");
}
console.log(firstName);
// console.log(age);

const myBirthday = true;
let age = 39;
if (myBirthday) {
    age = age + 1;
    // myBirthday = false;
}

const actors = [
    "Morgan Freeman", "Jennifer Aniston"
];
actors[2] = "Tom Cruise";
// actors = [];

function hello(name) {
    console.log(`Hello, ${name}.`);
}

hello("Victoria"); */

// ===================Functions========================

// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function (coolThings) {
    // ..
    return amazingStuff;
};

function greeting(myName) {
    console.log(`Hello, ${myName}!`);
}
greeting("Victoria");

var whatToSay = {
    greeting() {
        console.log("Hello!");
    },
    question() {
        console.log("What's your name?");
    },
    answer() {
        console.log("My name is Victoria.");
    }
};
whatToSay.greeting();
