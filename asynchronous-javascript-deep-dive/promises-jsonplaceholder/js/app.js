"use strict";

/*fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(data => data.json())
.then(obj => console.log(obj));*/

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

/*fetch('https://sonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`));*/

const asyncFunction = async() => {
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        console.log(await data.json());
    } catch(e) {
        console.log(e);
    }
}

/*(async function() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/');

    let res = await data.json();
    console.log(res);
})();*/

asyncFunction();
console.log('Other code');