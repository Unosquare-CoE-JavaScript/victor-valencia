"use strict";

/*fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(data => data.json())
.then(obj => console.log(obj));*/

/*let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

fetch('https://sonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`));*/

(async function() {
    let data=  await fetch('https://jsonplaceholder.typicode.com/todos/');

    let res = await data.json();
    console.log(res);
})();

console.log('Other code');