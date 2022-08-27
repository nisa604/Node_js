const request = require('request')
const url ='http://api.weatherstack.com/current?access_key=9fe069e8fcc6968ee7e6b1e95c7f5cff&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + 'it is currently' + response.body.current.temperature + 'degrees out. There is a ' +
    response.body.current.precipProbability + '% chance of rain.')
})