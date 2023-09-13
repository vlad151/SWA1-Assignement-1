import weatherPrediction from "./weatherPrediction.js";

export default function coveragePrediction(time, place, min, max, type, unit) {
    let _weatherPrediction;
    _weatherPrediction = weatherPrediction(
      time,
      place,
      min,
      max,
      type,
      unit
    );
    return { ..._weatherPrediction };
  }