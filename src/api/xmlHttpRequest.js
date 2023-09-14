import "../../src/styles.css";
import dayjs from "dayjs"; 
import  Type  from "../objects/types.js";
import weatherData from "../objects/weatherData.js";

const table = document.getElementById("forecastTable");
const timeRow = document.getElementById("time_header");
const tempRow = document.getElementById("temp_row");
const precipitatationRow = document.getElementById("precipitation_row");
const windRow = document.getElementById("wind_row");
const cloudRow = document.getElementById("cloud_row");

document.addEventListener("DOMContentLoaded", () => {
  const citySelect = document.getElementById("city-select");
  const initialCity = citySelect.value;
  requestWeatherData(initialCity);
  requestForcastData(initialCity);

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    requestWeatherData(selectedCity);
    requestForcastData(selectedCity);
  });
});

function requestWeatherData(city) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://localhost:8080/data/${city}`, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log("weatherData", data);
      } else {
        console.error("Error fetching the weather data");
      }
    }
  };

  xhr.send();
}

function requestForcastData(city) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://localhost:8080/forecast/${city}`, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log("Forecast data", data);
        populateHourlyForecast(data);
      } else {
        console.error(
          "Error fetching the forecast data - " +
            xhr.status +
            " " +
            xhr.statusText
        );
      }
    }
  };
  xhr.send();
}

function populateHourlyForecast(data) {
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
