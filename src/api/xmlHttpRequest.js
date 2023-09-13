import { populateHourlyForecast, populateLatestMeasurements, populateLastDayStats } from './populateData.js';

document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');
  
    citySelect.addEventListener('change', () => {
      const selectedCity = citySelect.value;
      fetchWeatherData(selectedCity);
    });
  });
  
  function fetchWeatherData(city) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `http://localhost:8080/data?city=${city}`, true);
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          // Now data contains the weather data
          // You can use this data to populate your HTML elements
        } else {
          console.error('Error fetching the weather data');
        }
      }
    };
    
    xhr.send();
  }
  