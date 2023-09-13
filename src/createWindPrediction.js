export default function createWindPrediction(
  time,
  place,
  min,
  max,
  type,
  unit,
  expectedDirection
) {
  let weatherPrediction;
  weatherPrediction = createWeatherPrediction(
    time,
    place,
    min,
    max,
    type,
    unit
  );
  function getExpectedDirection() {
    return expectedDirection;
  }
  function matches(data) {
    let isMatching = false;
    if (data.type === type && data.unit === unit) {
      if (expectedDirection.includes(data.direction)) {
        isMatching = true;
      }
    }
    return isMatching;
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
  return {
    ...weatherPrediction,
    getExpectedDirection,
    matches,
    convertToMPH,
    convertToMS,
  };
}