import Place from "./places.js";

export default function event(time, place) {
  function getTime() {
    return time;
  }

  function getPlace() {
    return place;
  }
  return { getTime, getPlace };
}

//Tests
/* 
let temp1 = event("2020-10-10", Place.HORSENS);
console.log(temp1.getTime());
console.log(temp1.getPlace()); 
 */