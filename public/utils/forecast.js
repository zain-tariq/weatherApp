const weather = require('openweather-apis')
const geoCode = require('../utils/geoCode.js')

weather.setAPPID('aa6050f5fb7920719589311bd04f7f8d')
weather.setLang('en')

const getForecast = (address, callback) => {
    geoCode(address,(error,data = {}) => {
        if(error){
                callback ({
                    error: 'Location Not Found!'}
                    )}
        else{
            weather.setCoordinate(data.latitude, data.longitude)
            weather.getAllWeather((error, forecastData) => {
                if(error)
                    callback({
                        error: 'Something went wrong!'
                    })
                else
                    callback ({
                        location: data.location,
                        temperature: forecastData.main.temp,
                        summary: forecastData.weather[0].description
                    })
            })
        }
    })
}


module.exports = getForecast