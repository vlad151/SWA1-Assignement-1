import "../../src/styles.css";
import dayjs from "dayjs"; 
import  Type  from "../objects/types.js";
import WeatherData from "../objects/weatherData.js";
import Units from "../objects/units.js";
import Temperature from "../objects/temperature.js";


const table = document.getElementById("forecastTable");
const timeRow = document.getElementById("time_header");
const tempRow = document.getElementById("temp_row");
const precipitatationRow = document.getElementById("precipitation_row");
const windRow = document.getElementById("wind_row");
const cloudRow = document.getElementById("cloud_row");

document.addEventListener("DOMContentLoaded", () => {
  const citySelect = document.getElementById("city-select");
  const typeSelect = document.getElementById("type-select");
  const unitSelect = document.getElementById("unit-select");
  const initialCity = citySelect.value;
  let selectedType = typeSelect.value;
  let selectedUnit = unitSelect.value;
  let selectedCity = citySelect.value;

  requestWeatherData(initialCity);
  requestForcastData(initialCity);

  citySelect.addEventListener("change", () => {
    selectedCity = citySelect.value;
    requestWeatherData(selectedCity);
    requestForcastData(selectedCity);
  });

  typeSelect.addEventListener("change", () => {
    selectedType = typeSelect.value;
    console.log(selectedType, "selected type");
  });

  unitSelect.addEventListener("change", () => {
    selectedUnit = unitSelect.value;
    console.log(selectedUnit, "selected unit");
  });

  const weatherDataForm = document.getElementById("weather-data-form-http");
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

export function sendWeatherData(weatherData) {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", `http://localhost:8080/data`, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
      if (xhr.status === 201) {
        console.log("WeatherData were successfully sent (HttpRequest)", weatherData);
      } else {
        console.error("Error sending the weather data");
      }
  };

  xhr.send(JSON.stringify(weatherData));
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
