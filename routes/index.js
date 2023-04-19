var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

//créez une route /movies 
//chargée de faire une requête vers le webservice The Movie Database 
//afin de récupérer les dernières "découvertes" proposées par l’API.
// https://api.themoviedb.org/3/discover/movie?api_key={YOUR_API_KEY}

 router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWN_API_KEY}`)
    .then(response => response.json())
    .then(data => {
    res.json({ movies: data.results});
    })
});

 module.exports =  router;
