const request = require('request');
const url ='http://api.weatherstack.com/current?access_key=9fe069e8fcc6968ee7e6b1e95c7f5cff&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current);
})
