import weatherData from "./weatherData";
import Units from "./units";

export default function wind(time, place, value, type, unit, direction) {
    let _weatherData;
    _weatherData = weatherData(time, place, value, type, unit);
  
    function getDirection() {
      return direction;
    }
    function convertToMPH() {
      const conversionFactor = 2.23694;
      let mphValue;
      if (unit === Units.MPH) {
        mphValue = value;
      } else {
        mphValue = value * conversionFactor;
      }
      return mphValue;
    }
    function convertToMS() {
      const conversionFactor = 0.44704;
      let msValue;
      if (unit === Units.MS) {
        msValue = value;
      } else {
        msValue = value * conversionFactor;
      }
      return msValue;
    }
    return { ..._weatherData, getDirection, convertToMPH, convertToMS };
  }