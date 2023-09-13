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
    function matches(weatherData) {
      let inRange = false;
      if (weatherData.unit === unit && weatherData.type === type) {
        if (min <= weatherData.value && max >= weatherData.value) {
          inRange = true;
        }
      }
      return inRange;
    }
    return { ..._event, matches, getMax, getMin, getType, getUnit };
  }