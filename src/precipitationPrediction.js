import weatherPrediction from "./weatherPrediction.js";
import Units from "./units.js"

export default function precipitationPrediction(
    time,
    place,
    min,
    max,
    type,
    unit,
    precipitationTypes
  ) {
    let _weatherPrediction;
    _weatherPrediction = weatherPrediction(
      time,
      place,
      min,
      max,
      type,
      unit
    );
    function getExpectedTypes() {
      return precipitationTypes;
    }
    function matches(data) {
      if (data.type === type && data.unit === unit) {
        if (min <= data.value && data.value <= max) {
          if (precipitationTypes.includes(data.precipitationType)) {
            return true;
          }
        }
      }
      return false;
    }
    function convertToInches() {
      let inchesValue;
      if (unit === Units.INCHES) {
        inchesValue = value;
      } else {
        inchesValue = value / 25.4;
      }
      return inchesValue;
    }
    function convertToMM() {
      let mmValue;
      if ((unit = Units.MM)) {
        mmValue = value;
      } else {
        mmValue = value * 25.4;
      }
      return mmValue;
    }
    return {
      ..._weatherPrediction,
      getExpectedTypes,
      matches,
      convertToInches,
      convertToMM,
    };
  }