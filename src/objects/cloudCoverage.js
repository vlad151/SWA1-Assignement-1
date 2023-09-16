import weatherData from "./weatherData.js";
import Place from "../objects/places.js";
import Type from "../objects/types.js";
import Units from "../objects/units.js";


export default function cloudCoverage(time, place, value, type, unit) {
  let _weatherData = weatherData(time, place, value, type, unit);
  return {
    time: time,
    place: place,
    value: value,
    type: type,
    unit: unit,
  };
  //return { ..._weatherData };
}

// Tests
/* 
let cloudCoverage1 = cloudCoverage("2020-10-10", Place.HORSENS, 70, Type.CLOUD_COVERAGE, Units.PERCENT, "North");
console.log(cloudCoverage1.getValue()); // 70
console.log(cloudCoverage1.getType()); // "CloudCoverage"
console.log(cloudCoverage1.getUnit()); // Units.PERCENTAGE
console.log(cloudCoverage1.getTime()); // "2020-10-10"
console.log(cloudCoverage1.getPlace()); // "Horsens"

let cloudCoverage2 = cloudCoverage("2020-10-11", Place.COPENHAGEN, 50, Type.CLOUD_COVERAGE, Units.PERCENT, "East");
console.log(cloudCoverage2.getValue()); // 50
console.log(cloudCoverage2.getType()); // "CloudCoverage"
console.log(cloudCoverage2.getUnit()); // Units.PERCENTAGE
console.log(cloudCoverage2.getTime()); // "2020-10-11"
console.log(cloudCoverage2.getPlace()); // "Copenhagen"
 */