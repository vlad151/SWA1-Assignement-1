import event from "./event.js";

export default function weatherData(time, place, value, type, unit) {
  
    let _event;
    _event = event(time, place);
  
    function getValue() {
      return value;
    }
    function getType() {
      return type;
    }
    function getUnit() {
      return unit;
    }
    return { ..._event, getValue, getType, getUnit };
  }