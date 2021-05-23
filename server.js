'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const axios = require('axios');
app.use(cors());


// let weather = require('./data/weather.json')

const PORT = process.env.PORT || 3050;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;


// const getWeather = require('./lib/weather.js')
// const getMovies = require('./lib/movies.js')


app.get('/weather', getWeather);


async function getWeather (request,response) {
  console.log(request.query);
  const lat = request.query.lat;
  const lon = request.query.lon
  
  const weatherUrl = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`
  let weatherResponse = await axios.get(weatherUrl)
  // console.log(weatherResponse);
  response.json(weatherResponse.data)
  
  class Forecast{
    constructor(day) {
      this.date = day.datetime;
      this.description= `Low of ${day.low_temp} and high of ${day.high_temp}, with ${day.weather.description}`
    }
  }
  
  try{
    
    const allForecast = new Forecast(weatherResponse.data); 
    response.send(allForecast);
    response.json(allForecast);
    
  } catch (error) {
    Error(error, response);
  }

  // const data = [
  //   lat,lon,search 
  
};
  
  
  // .then(response => {
  // })
  // .catch(error => {
  //   { console.log("Error, can not be displayed")}
  // })
  
  



app.get('/movies',getMovies);

async function getMovies (request, response ) {
  
  
  const searchM = request.query.search 
  
  const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchM}`
  
  
  const movieResponse = await axios.get(movieUrl)
  console.log(movieResponse.data);
  response.json(movieResponse.data);
  
  // .then(response => {
  //   console.log(request.query);
    
  // })
  // .catch(error=> {
    //   { console.log("Error, can not be displayed")}
    // })
    
    //  const newMovieArray = movieResponse.data.filter(movie => {
      //   movie.name.includes(request.query.name)
      //  })
      //  console.log(newMovieArray);
      //  response.json(newMovieArray);
    }
    
    app.get('*', (request, response) => {
      response.status(500).send('Something went wrong... Wrong route sent!');
    });


    class Movies{
      constructor(){
        
      }
    }
    



    
    
app.listen(PORT, () => console.log('Server is running'))


