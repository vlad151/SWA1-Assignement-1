import Type from "./objects/types.js";
import dayjs from "dayjs"; 


let minTempSpan = document.getElementById("min-temp");
let maxTempSpan = document.getElementById("max-temp");
let totalPrecipitationSpan = document.getElementById("total-precipitation");
let avgWindSpeedSpan = document.getElementById("avg-wind-speed");
export default function populateStats(data){
  let events = data;

  let minTemperature = 1000;
  let maxTemperature = -1000;
  let totalPrecipitation = 0;
  let totalWindSpeed = 0;
  let avgWindSpeed;
  let windSpeeds = [];

  events.forEach((event) => {
    if (event.type === Type.TEMPERATURE) {
      if (event.value > maxTemperature) {
        maxTemperature = event.value;
      }
      if (event.value < minTemperature) {
        minTemperature = event.value;
      }
    }

    if (event.type === Type.PRECIPITATION) {
      totalPrecipitation = totalPrecipitation + event.value;
    }

    if (event.type === Type.WIND_SPEED) {
      windSpeeds.push(event);
    }
  });

  windSpeeds.forEach((element) => {
    totalWindSpeed = totalWindSpeed + element.value;
  });
  avgWindSpeed = totalWindSpeed / windSpeeds.length;

  minTempSpan.innerHTML = `${minTemperature}`;
  maxTempSpan.innerHTML = `${maxTemperature}`;
  totalPrecipitationSpan.innerHTML = `${totalPrecipitation.toFixed(2)}`;
  avgWindSpeedSpan.innerHTML = `${avgWindSpeed.toFixed(2)}`;

  let lastEvents = [];
  lastEvents = events.slice(-4);


  let latestMeasurementsDiv = document.getElementById(
    "latest-measurements"
  );
  latestMeasurementsDiv.innerHTML = "";
  lastEvents.map(function (event) {
    let measurement = document.createElement("div");
    let timeSpan = document.createElement("span");
    let typeSpan = document.createElement("span");
    let valueSpan = document.createElement("span");
    measurement.classList.add("measurement");
    typeSpan.innerHTML = `${event.type}`;
    valueSpan.innerHTML = `${event.value} ${event.unit}`;

    timeSpan.innerHTML = `${dayjs(event.time).hour()}:00`;

    measurement.appendChild(timeSpan);
    measurement.appendChild(typeSpan);
    measurement.appendChild(valueSpan);
    latestMeasurementsDiv.appendChild(measurement);
  });
}