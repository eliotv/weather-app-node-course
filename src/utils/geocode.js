const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXZ0aWtpIiwiYSI6ImNra29ibnhjeDBiOWoyb3FkdjNjNzU1b3oifQ.WdzIWmKcH9AVorRraWKmpQ&limit=1'
    
    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (!body.features) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }   
    })
}

module.exports = geocode