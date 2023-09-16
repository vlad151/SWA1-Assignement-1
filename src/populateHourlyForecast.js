import Type from "./objects/types.js";
import dayjs from "dayjs"; 

const timeRow = document.getElementById("time_header");
const tempRow = document.getElementById("temp_row");
const precipitatationRow = document.getElementById("precipitation_row");
const windRow = document.getElementById("wind_row");
const cloudRow = document.getElementById("cloud_row");

export default function populateHourlyForecast(data) {
  timeRow.innerHTML = "";
  tempRow.innerHTML = "";
  precipitatationRow.innerHTML = "";
  windRow.innerHTML = "";
  cloudRow.innerHTML = "";
  console.log("data", data);
  let events = data;
  events.map(function (event) {
    let td = document.createElement("td");
    let timeTh = document.createElement("th");
    let type = document.createElement("span");
    let from = document.createElement("span");
    let to = document.createElement("span");
    let time = document.createElement("span");

    // type.innerHTML = `${event.type}`;
    from.innerHTML = `L: ${event.from} ${event.unit}`;
    to.innerHTML = `H: ${event.to} ${event.unit}`;
    time.innerHTML = `${dayjs(event.time).hour()}:00`;

    timeTh.appendChild(time);
    td.appendChild(type);

    td.appendChild(to);
    td.appendChild(from);

    if (event.type === Type.TEMPERATURE) {
      timeRow.appendChild(td);
      tempRow.appendChild(td);
    }
    if (event.type === Type.PRECIPITATION) {
      precipitatationRow.appendChild(td);
    }
    if (event.type === Type.WIND_SPEED) {
      windRow.appendChild(td);
    }
    if (event.type === Type.CLOUD_COVERAGE) {
      timeRow.appendChild(timeTh);
      cloudRow.appendChild(td);
    }
  });
}



