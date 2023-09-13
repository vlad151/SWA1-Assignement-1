import weatherData from "./weatherData.js";
import Units from "./units.js";
import Type from "./types.js";
import Place from "./places.js";

export default function precipitation(
  time,
  place,
  value,
  type,
  unit,
  precipitationType
) {
  let _weatherData = weatherData(time, place, value, type, unit);

  function getPrecipitationType() {
    return precipitationType;
  }

  function convertToInches() {
    return unit === Units.INCHES ? value : value / 25.4;
  }

  function convertToMM() {
    return unit === Units.MM ? value : value * 25.4;
  }

  return {
    ..._weatherData,
    getPrecipitationType,
    convertToInches,
    convertToMM,
  };
}


// Tests

/* 
let precip1 = precipitation("2020-10-10", Place.HORSENS, 100, Type.PRECIPITATION, Units.MM, "Rain");
console.log(precip1.getPrecipitationType()); // "Rain"
console.log(precip1.convertToInches()); // Approximately 3.937
console.log(precip1.convertToMM()); // 100
console.log(precip1.getValue()); // 100
console.log(precip1.getType()); // "Precipitation"
console.log(precip1.getUnit()); // Units.MM
console.log(precip1.getTime()); // "2020-10-10"
console.log(precip1.getPlace()); // "Horsens"

let precip2 = precipitation("2020-10-10", Place.HORSENS, 3.937, Type.PRECIPITATION, Units.INCHES, "Rain");
console.log(precip2.getPrecipitationType()); // "Rain"
console.log(precip2.convertToInches()); // 3.937
console.log(precip2.convertToMM()); // Approximately 100
console.log(precip2.getValue()); // 3.937
console.log(precip2.getType()); // "Precipitation"
console.log(precip2.getUnit()); // Units.INCHES
console.log(precip2.getTime()); // "2020-10-10"
console.log(precip2.getPlace()); // "Horsens" 
 */