import event from "./event.js";
import Units from "./units.js";
import Type from "./types.js";
import Place from "./places.js";

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

//Tests
/* 
  let temp1 = weatherData("2020-10-10", Place.HORSENS, 10, Type.TEMPERATURE, Units.C);
  console.log(temp1.getValue())
  console.log(temp1.getType())
  console.log(temp1.getUnit())
  console.log(temp1.getTime())
  console.log(temp1.getPlace()) 
*/