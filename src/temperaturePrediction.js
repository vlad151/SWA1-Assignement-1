import weatherPrediction from "./weatherPrediction.js";
import Units from "./units.js";
import Type from "./types.js";
import Place from "./places.js";

export default function temperaturePrediction(time, place, min, max, type, unit) {
  let _weatherPrediction = weatherPrediction(time, place, min, max, type, unit);

  function convertToF() {
    let minF = unit === Units.F ? min : (min * 9) / 5 + 32;
    let maxF = unit === Units.F ? max : (max * 9) / 5 + 32;
    return { min: minF, max: maxF };
  }

  function convertToC() {
    let minC = unit === Units.C ? min : (min - 32) / 1.8;
    let maxC = unit === Units.C ? max : (max - 32) / 1.8;
    return { min: minC, max: maxC };
  }

  return { ..._weatherPrediction, convertToF, convertToC };
}

// Tests
/* 
let tempPrediction = temperaturePrediction("2020-10-10", Place.HORSENS, 10, 20, Type.TEMPERATURE, Units.C);

console.log(tempPrediction.convertToF()); // { min: 50, max: 68 }
console.log(tempPrediction.convertToC()); // { min: 10, max: 20 }
console.log(tempPrediction.getMax()); // 20
console.log(tempPrediction.getMin()); // 10
console.log(tempPrediction.getType()); // "Temperature"
console.log(tempPrediction.getUnit()); // Units.C
console.log(tempPrediction.getTime()); // "2020-10-10"
console.log(tempPrediction.getPlace()); // "Horsens"
 */