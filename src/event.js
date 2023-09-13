export default function event(time, place) {
  function getTime() {
    return time;
  }

  function getPlace() {
    return place;
  }
  return { getTime, getPlace };
}