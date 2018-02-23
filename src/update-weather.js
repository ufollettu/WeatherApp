import * as elements from './elements';

export function updateWeather(weatherData) {
	elements.weatherCity.textContent = weatherData.cityName;
	elements.weatherDescription.textContent = weatherData.description;
	elements.weatherTemperature.textContent = weatherData.temperature;

	elements.loadingText.style.display = 'none';
	elements.weatherBox.style.display = 'block';
}