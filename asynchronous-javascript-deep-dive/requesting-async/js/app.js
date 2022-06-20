var MAINAPP = (function(namespace) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    let p1 = fetch(url + 'posts/').then(response1 => response1.json()),
        p2 = fetch(url + 'comments/').then(response2 => response2.json()),
        p3 = fetch(url + 'todos/').then(response3 => response3.json());

    Promise.all([p1, p2, p3])
    .then(msg => {
        namespace.posts = msg[0];
        namespace.comments = msg[1];
        namespace.todos = msg[2];
        console.log("We have received the data!");
    })
    .catch(err => console.log(`Problem retrieving data: ${err}`));

    return namespace;
})(MAINAPP || {});