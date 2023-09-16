import "../../src/styles.css";
import temperature from "../objects/temperature.js";
import precipitation from "../objects/precipitation.js";
import cloudCoverage from "../objects/cloudCoverage.js";
import wind from "../objects/wind.js";
import Place from "../objects/places.js";
import Type from "../objects/types.js";
import Units from "../objects/units.js";
import dayjs from "dayjs";

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('weather-data-form').addEventListener('submit', (event) => {
        event.preventDefault();

            const city = document.getElementById('city-select').value;
            const time = dayjs()
            const temp = document.getElementById('temperature-value').value;
            const tempUnit = document.getElementById('temperature-unit').value;
            const precipitationValue = document.getElementById('precipitation-value').value;
            const precipitationType = document.getElementById('precipitation-type').value;
            const precipitationUnit = document.getElementById('precipitation-unit').value;
            const windValue = document.getElementById('wind-value').value;
            const windDirection = document.getElementById('wind-direction').value;
            const windUnit = document.getElementById('wind-unit').value;
            const cloudCoverageValue = document.getElementById('cloudCoverage-value').value;

            const temp1 = temperature(time, city, temp, Type.TEMPERATURE, tempUnit);
            const precip1 = precipitation(time, city, precipitationValue, Type.PRECIPITATION, precipitationUnit, precipitationType);
            const cloudCoverage1 = cloudCoverage(time, city, cloudCoverageValue, Type.CLOUD_COVERAGE, Units.PERCENT);
            const wind1 = wind(time, city, windValue, Type.WIND_SPEED, windUnit, windDirection);
            
         const weatherData = [temp1, precip1, cloudCoverage1, wind1] 
  
        
    

        sendWeatherData(weatherData);
    });
});



function sendWeatherData(weatherData) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/data", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(weatherData));
    xhr.onload = () => {
        if (xhr.status === 201) {
            alert("Data sent successfully");         
        } else {
            alert("Error sending data");
        }
    };
}
