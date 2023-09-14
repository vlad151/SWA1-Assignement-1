import dayjs from "dayjs";
import Type from "../objects/types.js";

document.addEventListener("DOMContentLoaded", () => {
  const citySelect = document.getElementById("city-select");

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    fetchWeatherData(selectedCity);
    console.log(selectedCity, "selected city")
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
  fetch(`http://localhost:8080/forecast/${value}`, {
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
