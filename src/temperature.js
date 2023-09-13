import weatherData from "./weatherData";
import Units from "./units";

export default function temperature(time, place, value, type, unit) {
    let _weatherData;
    _weatherData = weatherData(time, place, value, type, unit);
  
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
    return { ..._weatherData, convertToF, convertToC };
  }

