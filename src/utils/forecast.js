const request = require('request')


const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3b42459aa8d9891de00734db7a9ccdcd&query=' 
    + latitude 
    + ',' 
    + longitude 
    + '&units=f'
    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to forecast services.', undefined)
        } else if (body.error) {
            callback('Unable to find forecast for location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]
                + ' throughout the day. It is currently ' 
                + body.current.temperature 
                + ' degrees out. Although it feels like ' 
                + body.current.feelslike
                + '. The humidity for today is '
                + body.current.humidity + '%'
                + '. The wind speed for today is '
                + body.current.wind_speed 
                + '.')
        }
    })
}


module.exports = forecast