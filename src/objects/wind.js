import weatherData from "./weatherData.js";
import Units from "./units.js";



export default function wind(time, place, value, type, unit, direction) {
  let _weatherData = weatherData(time, place, value, type, unit);

  function getDirection() {
    return direction;
  }

  function convertToMPH() {
    return unit === Units.MPH ? value : value * 2.23694;
  }

  function convertToMS() {
    return unit === Units.MS ? value : value * 0.44704;;
  }

  return {
    time: time,
    place: place,
    value: value,
    type: type,
    unit: unit,
    direction: direction,
  };

  //return { ..._weatherData, getDirection, convertToMPH, convertToMS };
}

// Tests
/* 
let wind1 = wind("2020-10-10", Place.HORSENS, 10, Type.WIND_SPEED, Units.MS, "North");
console.log(wind1.getDirection()); // "North"
console.log(wind1.convertToMPH()); // Approximately 22.3694
console.log(wind1.convertToMS()); // 10
console.log(wind1.getValue()); // 10
console.log(wind1.getType()); // "Wind"
console.log(wind1.getUnit()); // Units.MS
console.log(wind1.getTime()); // "2020-10-10"
console.log(wind1.getPlace()); // "Horsens"

let wind2 = wind("2020-10-10", Place.HORSENS, 22.3694, Type.WIND_SPEED, Units.MPH, "North");
console.log(wind2.getDirection()); // "North"
console.log(wind2.convertToMPH()); // 22.3694
console.log(wind2.convertToMS()); // Approximately 10
console.log(wind2.getValue()); // 22.3694
console.log(wind2.getType()); // "Wind"
console.log(wind2.getUnit()); // Units.MPH
console.log(wind2.getTime()); // "2020-10-10"
console.log(wind2.getPlace()); // "Horsens"
 */