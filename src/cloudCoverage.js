import weatherData from "./weatherData.js";

function cloudCoverage(time, place, value, type, unit) {
    let _weatherData;
    _weatherData = weatherData(time, place, value, type, unit);
    return { ..._weatherData };
  }