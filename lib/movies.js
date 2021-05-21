'use strict'

const axios = require('axios');

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

app.get('/movies',getMovies);

async function getMovies (request, response ) {
  
  
  const searchM = request.query.search 
  
  const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchM}`
  
  
  const movieResponse = await axios.get(movieUrl)
  console.log(movieResponse.data);
  response.json(movieResponse.data);
}


module.exports = getMovies;