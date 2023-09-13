import createEvent from "./createEvent.js";


export default function createWeatherPrediction(time, place, min, max, type, unit) {
    let event;
    event = createEvent(time, place);
  
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
    function matches(data) {
      let inRange = false;
      if (data.unit === unit && data.type === type) {
        if (min <= data.value && max >= data.value) {
          inRange = true;
        }
      }
      return inRange;
    }
    return { ...event, matches, getMax, getMin, getType, getUnit };
  }