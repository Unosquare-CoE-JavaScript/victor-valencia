var MAINAPP = (function(namespace) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    fetch(url + 'posts/')
    .then(response1 => response1.json())
    .then(posts => namespace.posts = posts)
    .catch(err => console.log(`Problem retrieving posts: ${err}`));

    fetch(url + 'comments/')
    .then(response2 => response2.json())
    .then(comments => namespace.comments = comments)
    .catch(err => console.log(`Problem retrieving comments: ${err}`));

    fetch(url + 'todos/')
    .then(response3 => response3.json())
    .then(todos => namespace.todos = todos)
    .catch(err => console.log(`Problem retrieving todos: ${err}`));

    return namespace;
})(MAINAPP || {});