import "../../src/styles.css";
import populateStats from "../populateStats.js";
import populateHourlyForecast from "../populateHourlyForecast.js";


document.addEventListener("DOMContentLoaded", () => {
  const citySelect = document.getElementById("city-select");
  const initialCity = citySelect.value;
  forecastData(initialCity);
  fetchPopulateStats(initialCity);

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    forecastData(selectedCity);
    fetchPopulateStats(selectedCity);
    fetchWeatherData(selectedCity);
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

}
let selectedCity = document.getElementById("city-select");

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
        return Promise.reject(response.statusText);
      }
    })

    .then((data) => {
      populateHourlyForecast(data)
      return data;
    });
}

export function fetchPopulateStats(city) {
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
      populateStats(data)
      return data;
    });
}
