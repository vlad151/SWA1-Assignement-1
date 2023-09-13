import createWeatherPrediction from "./createWeatherPrediction.js";

export default function createCloudCoveragePrediction(time, place, min, max, type, unit) {
    let weatherPrediction;
    weatherPrediction = createWeatherPrediction(
      time,
      place,
      min,
      max,
      type,
      unit
    );
    return { ...weatherPrediction };
  }