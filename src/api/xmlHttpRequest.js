import "../../src/styles.css";
import populateHourlyForecast from "../populateHourlyForecast.js";
import populateStats from "../populateStats.js";

document.addEventListener("DOMContentLoaded", () => {
  const citySelect = document.getElementById("city-select");
  const initialCity = citySelect.value;
  requestWeatherData(initialCity);
  requestForcastData(initialCity);
  requestStatsData(initialCity)

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    requestWeatherData(selectedCity);
    requestForcastData(selectedCity);
    requestStatsData(selectedCity)
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

function requestStatsData(city) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://localhost:8080/data/${city}`, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log("Forecast data", data);
        populateStats(data);
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