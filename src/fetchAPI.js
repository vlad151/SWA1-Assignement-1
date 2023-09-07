import { populateHourlyForecast, populateLatestMeasurements, populateLastDayStats } from './populateData.js';

document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');
  
    citySelect.addEventListener('change', () => {
      const selectedCity = citySelect.value;
      fetchWeatherData(selectedCity);
    });
  });
  
  function fetchWeatherData(city) {
    fetch(`https://your-server-url.com/weather?city=${city}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Now data contains the weather data
        // You can use this data to populate your HTML elements
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  