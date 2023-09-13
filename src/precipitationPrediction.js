import weatherPrediction from "./weatherPrediction.js";
import Units from "./units.js";
import Type from "./types.js";
import Place from "./places.js";

export default function precipitationPrediction(
  time,
  place,
  min,
  max,
  type,
  unit,
  precipitationTypes
) {
  let _weatherPrediction = weatherPrediction(time, place, min, max, type, unit);

  function getExpectedTypes() {
    return precipitationTypes;
  }

  function matches(data) {
    return data.type === type && data.unit === unit && min <= data.value && data.value <= max && precipitationTypes.includes(data.precipitationType);
  }

  function convertToInches() {
    let minInches = unit === Units.INCHES ? min : min / 25.4;
    let maxInches = unit === Units.INCHES ? max : max / 25.4;
    return { min: minInches, max: maxInches };
  }

  function convertToMM() {
    let minMM = unit === Units.MM ? min : min * 25.4;
    let maxMM = unit === Units.MM ? max : max * 25.4;
    return { min: minMM, max: maxMM };
  }

  return {
    ..._weatherPrediction,
    getExpectedTypes,
    matches,
    convertToInches,
    convertToMM,
  };
}

// Tests
/* let precipitationPredictionSample = precipitationPrediction("2020-10-10", Place.HORSENS, 10, 20, Type.PRECIPITATION, Units.MM, ["Rain", "Snow"]);

console.log(precipitationPredictionSample.convertToInches()); // { min: Approximately 0.3937, max: Approximately 0.7874 }
console.log(precipitationPredictionSample.convertToMM()); // { min: 10, max: 20 }
console.log(precipitationPredictionSample.getExpectedTypes()); // ["Rain", "Snow"]
console.log(precipitationPredictionSample.getMax()); // 20
console.log(precipitationPredictionSample.getMin()); // 10
console.log(precipitationPredictionSample.getType()); // "Precipitation"
console.log(precipitationPredictionSample.getUnit()); // Units.MM
console.log(precipitationPredictionSample.getTime()); // "2020-10-10"
console.log(precipitationPredictionSample.getPlace()); // "Horsens"
 */