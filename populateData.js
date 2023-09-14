 export function populateHourlyForecast(data) {
    const hourlyForecastSection = document.getElementById('hourly-forecast');
    hourlyForecastSection.innerHTML = ''; // Clear any existing data
  
    const forecastData = data.hourlyForecast; // Adjust based on the actual data structure
  
    forecastData.forEach((forecast, index) => {
      const forecastElement = document.createElement('div');
      forecastElement.classList.add('hourly-forecast-item');
  
      const timeElement = document.createElement('div');
      timeElement.textContent = `Time: ${forecast.time}`; // Adjust based on the actual data structure
  
      const temperatureElement = document.createElement('div');
      temperatureElement.textContent = `Temperature: ${forecast.temperature} °C`; // Adjust based on the actual data structure
  
      // Add other data points (e.g., wind speed, precipitation, etc.) in a similar manner
  
      forecastElement.appendChild(timeElement);
      forecastElement.appendChild(temperatureElement);
  
      hourlyForecastSection.appendChild(forecastElement);
    });
  }
  

  export function populateLatestMeasurements(data) {
    const latestMeasurementsSection = document.getElementById('latest-measurements');
    latestMeasurementsSection.innerHTML = ''; // Clear any existing data
  
    const measurementsData = data.latestMeasurements; // Adjust based on the actual data structure
  
    // Create and append elements for each measurement in a similar manner to the hourly forecast function
  }

  export function populateLastDayStats(data) {
    const lastDayStatsSection = document.getElementById('last-day-stats');
    
    const minTempElement = document.getElementById('min-temp');
    minTempElement.textContent = `Minimum Temperature: ${data.minTemp} °C`; // Adjust based on the actual data structure
  
    const maxTempElement = document.getElementById('max-temp');
    maxTempElement.textContent = `Maximum Temperature: ${data.maxTemp} °C`; // Adjust based on the actual data structure
  
    // Create and append elements for other data points (e.g., total precipitation, average wind speed) in a similar manner
  }
  
