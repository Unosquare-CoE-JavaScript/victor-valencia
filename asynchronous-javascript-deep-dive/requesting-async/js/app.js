var MAINAPP = (function(namespace) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    (async function() {
        try {
            let p1 = await fetch(url + 'posts/'),
                p2 = await fetch(url + 'comments/'),
                p3 = await fetch(url + 'todos/');
      

            const res = await Promise.all([p1, p2, p3]);
            namespace.posts = await res[0].json();
            namespace.comments = await res[1].json();
            namespace.todos = await res[2].json();
            console.log('data loaded!');
        } catch(e) {
            console.log(`Problem retrieving data: ${e}`);
        }
    })();

    /*let p1 = fetch(url + 'posts/').then(response1 => response1.json()),
        p2 = fetch(url + 'comments/').then(response2 => response2.json()),
        p3 = fetch(url + 'todos/').then(response3 => response3.json()),
        p4 = Promise.reject('Testing Static Methods');

    Promise.any([p1, p2, p3, p4])
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(`Problem retrieving data: ${err}`));*/

    return namespace;
})(MAINAPP || {});