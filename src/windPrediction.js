import weatherPrediction from "./weatherPrediction.js";
import Units from "./units.js";
import Type from "./types.js";
import Place from "./places.js";

export default function windPrediction(
  time,
  place,
  min,
  max,
  type,
  unit,
  expectedDirection
) {
  let _weatherPrediction = weatherPrediction(time, place, min, max, type, unit);

  function getExpectedDirection() {
    return expectedDirection;
  }

  function matches(data) {
    return data.type === type && data.unit === unit && expectedDirection.includes(data.direction);
  }

  function convertToMPH() {
    const conversionFactor = 2.23694;
    let minMPH = unit === Units.MPH ? min : min * conversionFactor;
    let maxMPH = unit === Units.MPH ? max : max * conversionFactor;
    return { min: minMPH, max: maxMPH };
  }

  function convertToMS() {
    const conversionFactor = 0.44704;
    let minMS = unit === Units.MS ? min : min * conversionFactor;
    let maxMS = unit === Units.MS ? max : max * conversionFactor;
    return { min: minMS, max: maxMS };
  }

  return {
    ..._weatherPrediction,
    getExpectedDirection,
    matches,
    convertToMPH,
    convertToMS,
  };
}

// Tests
/* let windPredictionSample = windPrediction("2020-10-10", Place.HORSENS, 10, 20, Type.WIND_SPEED, Units.MS, ["N", "NE"]);

console.log(windPredictionSample.convertToMPH()); // { min: Approximately 22.3694, max: Approximately 44.7387 }
console.log(windPredictionSample.convertToMS()); // { min: 10, max: 20 }
console.log(windPredictionSample.getExpectedDirection()); // ["N", "NE"]
console.log(windPredictionSample.getMax()); // 20
console.log(windPredictionSample.getMin()); // 10
console.log(windPredictionSample.getType()); // "Wind"
console.log(windPredictionSample.getUnit()); // Units.MS
console.log(windPredictionSample.getTime()); // "2020-10-10"
console.log(windPredictionSample.getPlace()); // "Horsens"
 */