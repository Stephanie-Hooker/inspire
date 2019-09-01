import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function _drawWeather() {
	document.getElementById('weather').innerHTML = _weatherService.Weather.Template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', _drawWeather)
		_weatherService.getWeather()

	}

}
