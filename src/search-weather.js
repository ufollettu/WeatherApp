import * as elements from './elements';
import {Http} from './http';
import {WeatherData, weatherProxyHandler} from './weather-data';
import {updateWeather} from './update-weather';

const appId = '0056ed3fccc8562ca99aa035ebd0eceb';

export function searchWeather() {
	const cityName = elements.searchedCity.value.trim();
	if (cityName.length == 0) {
		alert('Please enter a City Name');
	}
	elements.loadingText.style.display = 'block';
	elements.weatherBox.style.display = 'none';
	const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + appId;
	Http.fetchData(weatherUrl)
		.then(responseData => {
			const weatherData = new WeatherData(cityName, responseData.weather[0].description.toUpperCase());
			const weatherProxy = new Proxy(weatherData, weatherProxyHandler);
			weatherProxy.temperature = responseData.main.temp;
			updateWeather(weatherProxy);
		})
		.catch(error => alert(error));
}