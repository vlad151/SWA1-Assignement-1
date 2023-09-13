import weatherPrediction from "./weatherPrediction.js";


export default function coveragePrediction(time, place, min, max, type, unit) {
  let _weatherPrediction = weatherPrediction(time, place, min, max, type, unit);
  return { ..._weatherPrediction };
}

// Tests
/* let coveragePredictionSample = coveragePrediction("2020-10-10", Place.HORSENS, 10, 20, Type.CLOUD_COVERAGE, Units.PERCENT);

console.log(coveragePredictionSample.getMax()); // 20
console.log(coveragePredictionSample.getMin()); // 10
console.log(coveragePredictionSample.getType()); // "Coverage"
console.log(coveragePredictionSample.getUnit()); // "percentage"
console.log(coveragePredictionSample.getTime()); // "2020-10-10"
console.log(coveragePredictionSample.getPlace()); // "Horsens"
 */