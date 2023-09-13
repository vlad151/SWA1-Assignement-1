import weatherPrediction from "./createWeatherPrediction.js";
import Units from "./units.js";


export default function temperaturePrediction(time, place, min, max, type, unit) {
    let _weatherPrediction;
    _weatherPrediction = weatherPrediction(time, place, min, max, type, unit);
  
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
        celsiusValue = value;
      } else {
        celsiusValue = (value - 32) / 1.8;
      }
      return celsiusValue;
    }
  
    return { ..._weatherPrediction, convertToF, convertToC };
  }