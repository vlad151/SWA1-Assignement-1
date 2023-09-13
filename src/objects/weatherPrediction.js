import event from "./event.js";


export default function weatherPrediction(time, place, min, max, type, unit) {
    let _event;
    _event = event(time, place);
  
    function getMax() {
      return max;
    }
  
    function getMin() {
      return min;
    }
  
    function getType() {
      return type;
    }
    function getUnit() {
      return unit;
    }
    function matches(_weatherData) {
      return _weatherData.getUnit() === unit 
      && _weatherData.getType() === type 
      && min <= _weatherData.getValue() 
      && max >= _weatherData.getValue();
    }
    return { ..._event, matches, getMax, getMin, getType, getUnit };
  }


// Tests
/* 
let weatherDataSample = weatherData("2020-10-10", Place.HORSENS, 15, Type.TEMPERATURE, Units.C);
let weatherDataSampleFalse = weatherData("2020-10-10", Place.HORSENS, 25, Type.TEMPERATURE, Units.C); // This sample has a value outside the predicted range

let weatherPredictionSample = weatherPrediction("2020-10-10", Place.HORSENS, 10, 20, Type.TEMPERATURE, Units.C);

console.log(weatherPredictionSample.matches(weatherDataSample)); // true
console.log(weatherPredictionSample.matches(weatherDataSampleFalse)); // false

console.log(weatherPredictionSample.getMax()); // 20
console.log(weatherPredictionSample.getMin()); // 10
console.log(weatherPredictionSample.getType()); // "Temperature"
console.log(weatherPredictionSample.getUnit()); // Units.C
console.log(weatherPredictionSample.getTime()); // "2020-10-10"
console.log(weatherPredictionSample.getPlace()); // "Horsens"
 */