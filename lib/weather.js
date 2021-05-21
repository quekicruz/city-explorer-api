'use strict'

const axios = require('axois')

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


app.get('/weather', getWeather);

async function getWeather (request,response) {

  const lat = request.query.lat;
  const lon = request.query.lon
  
  const weatherUrl = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`
  let weatherResponse = await axios.get(weatherUrl)
  console.log(weatherResponse);
  response.json(weatherResponse.data)
  
  try{
    
    const allForecast = weatherResponse.data.data.map(day => new Forecast(day)); 
    response.send(allForecast);
    response.json(allForecast);
    
  } catch (error) {
    Error(error, response);
  }
  
};

module.exports = getWeather