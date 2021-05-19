'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());


let weather = require('./data/weather.json')


const PORT = process.env.PORT || 3050;

app.get('/', (request, response) => {
  response.send('hello from the home route!');
});

app.get('/weather', (request,response) => {
  // let lat = request.query.lat;
  // let lon = request.query.lon
  // let search = request.query.searchQuery

  // const data = [
  //   lat,lon,search 
  response.send(`Get your weather report here!`);
  
});



app.listen(PORT, () => console.log('Server is running'))
