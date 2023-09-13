import createWeatherPrediction from "./createWeatherPrediction.js";


export default function createTemperaturePrediction(time, place, min, max, type, unit) {
    let weatherPrediction;
    weatherData = createWeatherPrediction(time, place, min, max, type, unit);
  
    function convertToF() {
      let fahrenheitValue;
      if (unit === Units.F) {
        fahrenheitValue = value;
      } else {
        fahrenheitValue = (value * 9) / 5 + 32;
      }
      return fahrenheitValue;
    }
  
    function convertToC() {
      let celsiusValue;
      if (unit === Units.C) {
        celsiusVsalue = value;
      } else {
        celsiusValue = (value - 32) / 1.8;
      }
      return celsiusValue;
    }
  
    return { ...weatherPrediction, convertToF, convertToC };
  }