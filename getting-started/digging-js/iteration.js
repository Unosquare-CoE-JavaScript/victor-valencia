'use strict';

function print(params) {
    console.log(params)
}

var arr = [10, 20, 30];

for (let val of arr) {
    console.log(`Array value: ${val}`);
}

var arrCopy = [...arr];

console.log(arrCopy);
print(...arrCopy);

var greeting = "Hello world!";
var chars = [...greeting];

console.log(chars);

var btn1 = document.createElement("btn1");
var btn2 = document.createElement("btn2");

var buttonNames = new Map();
buttonNames.set(btn1, "Button 1");
buttonNames.set(btn2, "Button 2");
for (let [btn, btnName] of buttonNames) {
    btn.addEventListener("click", function onClick() {
        console.log(`Clicked ${ btnName }`);
    });
}

for (let btnName of buttonNames.values()) {
    console.log(btnName);
}

var arr = [10, 20, 30];
for (let [idx, val] of arr.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}