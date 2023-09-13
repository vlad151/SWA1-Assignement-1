import createEvent from "./createEvent.js";

export default function createWeatherData(time, place, value, type, unit) {
  

    let event;
    event = createEvent(time, place);
  
    function getValue() {
      return value;
    }
    function getType() {
      return type;
    }
    function getUnit() {
      return unit;
    }
    return { ...event, getValue, getType, getUnit };
  }