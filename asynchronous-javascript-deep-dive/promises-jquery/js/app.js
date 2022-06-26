"use strict";

const moviePlanets = async(movieNum) => {
    let url = 'https://swapi.dev/api/film/';
    try {
        if(isNaN(movieNum)) {
            throw "you must pass a number!";
        }
        const movie = await $.getJSON(url + movieNum + '/');

        console.log(movie.title);
        // console.log(movie)

        /*for(url of movie.planets) {
            let planet = await $.getJSON(url);
            console.log(planet); 
        }*/

        let promises = movie.planets.map(url => $.getJSON(url));

        for await(let pl of promises) {
        console.log(pl);
        } // a lot faster
    } catch(reject) {
        console.log(reject);
    }
};

/* const moviePlanets = function(movieNum) {
    let url = 'https://swapi.dev/api/films/';

    $.getJSON(url + movieNum + '/')
    .then(function(response) {
        console.log(response.title);

        response.planets.forEach(p => $.getJSON(p).then(pl => console.log(pl.name)));
    })
    .catch(reject => console.log(`Couldn't retrieve films: ${reject}`));
};*/ 

moviePlanets(3);