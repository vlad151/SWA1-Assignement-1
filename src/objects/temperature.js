import weatherData from "./weatherData.js";
import Units from "./units.js";


export default function temperature(time, place, value, type, unit) {
  let _weatherData = weatherData(time, place, value, type, unit);
  
  function convertToF() {
    return unit === Units.F ? value : (value * 9) / 5 + 32;
  }

  function convertToC() {
    return unit === Units.C ? value : (value - 32) / 1.8;
  }
  
  return { ..._weatherData, convertToF, convertToC };
  }

  // Tests
/*   
let temp1 = temperature("2020-10-10", Place.HORSENS, 0, Type.TEMPERATURE, Units.C);
console.log(temp1.convertToF()); // 32
console.log(temp1.convertToC()); // 0
console.log(temp1.getValue()); // 0
console.log(temp1.getType()); // "Temp"
console.log(temp1.getUnit()); // Units.C
console.log(temp1.getTime()); // "2020-10-10"
console.log(temp1.getPlace()); // "Horsens"

let temp2 = temperature("2020-10-10", Place.HORSENS, 32, Type.TEMPERATURE, Units.F);
console.log(temp2.convertToF()); // 32
console.log(temp2.convertToC()); // 0
console.log(temp2.getValue()); // 32
console.log(temp2.getType()); // "Temp"
console.log(temp2.getUnit()); // Units.F
console.log(temp2.getTime()); // "2020-10-10"
console.log(temp2.getPlace()); // "Horsens" 
 */