import "../../src/styles.css";
import dayjs from "dayjs";
import Type from "../objects/types.js";

document.addEventListener("DOMContentLoaded", () => {
  const citySelect = document.getElementById("city-select");
  const initialCity = citySelect.value;
  forecastData(initialCity);
  populateStats(initialCity);

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    forecastData(selectedCity);
    populateStats(selectedCity);
    fetchWeatherData(selectedCity);
    console.log(selectedCity, "selected city");
  });
});

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export function fetchWeatherData(city) {
  fetch(`http://localhost:8080/data/${city}`, {
    method: "GET",
    body: JSON.stringify(),
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok " + response.statusText);
    }
  });
  // .then(data => {
  //   // Now data contains the weather data
  //   // You can use this data to populate your HTML elements
  //   // console.log("data", data)
  //   return data
  // })
  // .catch(error => {
  //   console.error('There has been a problem with your fetch operation:', error);
  // });
}
let selectedCity = document.getElementById("city-select");
console.log(selectedCity, "selected cuty");
var value = selectedCity.options[selectedCity.selectedIndex].value;
// console.log(selectedCity, "selected city")

const table = document.getElementById("forecastTable");
const timeRow = document.getElementById("time_header");
const tempRow = document.getElementById("temp_row");
const precipitatationRow = document.getElementById("precipitation_row");
const windRow = document.getElementById("wind_row");
const cloudRow = document.getElementById("cloud_row");

export function forecastData(city) {
  fetch(`http://localhost:8080/forecast/${city}`, {
    method: "GET",
    body: JSON.stringify(),
    headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // console.log(response.json(), "response")
        return Promise.reject(response.statusText);
      }
    })

    .then((data) => {
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
      return data;
    });
}


let minTempSpan = document.getElementById("min-temp");
let maxTempSpan = document.getElementById("max-temp");
let totalPrecipitationSpan = document.getElementById("total-precipitation");
let avgWindSpeedSpan = document.getElementById("avg-wind-speed");
export function populateStats(city) {
  fetch(`http://localhost:8080/data/${city}`, {
    method: "GET",
    body: JSON.stringify(),
    headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.statusText);
      }
    })

    .then((data) => {

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
      return data;
    });
}
