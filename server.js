'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const axios = require('axios');
app.use(cors());


// let weather = require('./data/weather.json')

const PORT = process.env.PORT || 3050;
const WEATHER_API = process.env.WEATHER_API_KEY;
const MOVIE_API = process.env.MOVIE_API_KEY;


class Forecast{
  constructor(date,description) {
    this.date = date;
    this.description= description;
  }
}

https://api.themoviedb.org/3/movie/550?api_key=974c6d2fe59ecbaf90dea41522c600bf

app.get('/weather', getWeather);

async function getWeather (request,response) {
  const searchQuery = request.query.query;

  const weatherUrl = `http://api.weatherbit.io/v2.0/current?key=4a167f382c70437cab0e8d65a553b68d`
  console.log(weatherUrl);
  let weatherResponse = await axios.get(weatherUrl);
  console.log(weatherResponse.data);
  response.send('Here is the weather');
}


app.get('/movies',getMovies);

async function getMovies (request, response ) {
  
  const movieUrl = `https://api.themoviedb.org/3/movie/550?api_key=974c6d2fe59ecbaf90dea41522c600bf`

   let movieResponse = await axios.get(movieUrl);
   console.log(movieResponse.data);
   response.json(movieResponse.data)
   console.log(request.query)
  
  //  const newMovieArray = movieResponse.data.filter(movie => {
  //   movie.name.includes(request.query.name)
  //  })
  //  console.log(newMovieArray);
  //  response.json(newMovieArray);
}

class Movies{
  constructor(){

  }
}



app.listen(PORT, () => console.log('Server is running'))