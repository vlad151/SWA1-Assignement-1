function createCloudCoverage(time, place, value, type, unit) {
    let weatherData;
    weatherData = createWeatherData(time, place, value, type, unit);
    return { ...weatherData };
  }