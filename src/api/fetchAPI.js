import "../../src/styles.css";
import dayjs from "dayjs";
import Type from "../objects/types.js";
import Units from "../objects/units.js";
import WeatherData from "../objects/weatherData.js";
import Temperature from "../objects/temperature.js";


document.addEventListener("DOMContentLoaded", () => {
  const citySelect = document.getElementById("city-select");
  const typeSelect = document.getElementById("type-select");
  const unitSelect = document.getElementById("unit-select");
  const initialCity = citySelect.value;
  let selectedType = typeSelect.value;
  let selectedUnit = unitSelect.value;
  let selectedCity = citySelect.value;

  forecastData(initialCity);
  populateStats(initialCity);

  citySelect.addEventListener("change", () => {
    selectedCity = citySelect.value;
    forecastData(selectedCity);
    populateStats(selectedCity);
    fetchWeatherData(selectedCity);
    console.log(selectedCity, "selected city");
  });

  typeSelect.addEventListener("change", () => {
    selectedType = typeSelect.value;
    console.log(selectedType, "selected type");
  });

  unitSelect.addEventListener("change", () => {
    selectedUnit = unitSelect.value;
    console.log(selectedUnit, "selected unit");
  });

  const weatherDataForm = document.getElementById("weather-data-form-fetch");
  weatherDataForm.addEventListener("submit", () => {
    const date = new Date()
    const formattedDate = date.toISOString()
    const wind_directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest']
    const precipitation_types = ['rain', 'sleet', 'hail', 'snow']

    let weatherData = WeatherData(formattedDate, selectedCity, document.getElementById("input").value, selectedType, selectedUnit)
    let weatherData2 = {
      "type": weatherData.getType(),
      "time": weatherData.getTime(),
      "place": weatherData.getPlace(),
      "value": weatherData.getValue(),
      "unit": weatherData.getUnit(),
    }
    if (selectedType == "wind speed") {
      weatherData2.direction = wind_directions.at(Math.random() * wind_directions.length);
    }
    if (selectedType == "precipitation") {
      weatherData2.precipitation_type = precipitation_types.at(Math.random() * precipitation_types.length);
    }
      
    sendWeatherData(weatherData2)
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

export function sendWeatherData(weatherData) {
  fetch(`http://localhost:8080/data`, {
    method: "POST",
    body: JSON.stringify(weatherData),
    headers,
  }).then((response) => {
    if (response.ok) {
      console.log("WeatherData were successfully sent (fetchAPI)", weatherData);
      return response.json();
    } else {
      throw new Error("Network response was not ok " + response.statusText);
    }
  });
}

let selectedCity = document.getElementById("city-select");
console.log(selectedCity, "selected cuty");
var value = selectedCity.options[selectedCity.selectedIndex].value;
// console.log(selectedCity, "selected city")

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
