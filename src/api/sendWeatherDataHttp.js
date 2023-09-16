import "../../src/styles.css";
import temperature from "../objects/temperature.js";
import precipitation from "../objects/precipitation.js";
import cloudCoverage from "../objects/cloudCoverage.js";
import wind from "../objects/wind.js";
import Place from "../objects/places.js";
import Type from "../objects/types.js";
import Units from "../objects/units.js";

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('weather-data-form').addEventListener('submit', (event) => {
        event.preventDefault();

         const city = document.getElementById('city-select').value;
        const temperature = document.getElementById('temperature').value; 

   /*      let temp1 = temperature("2020-10-10", Place.HORSENS, 0, Type.TEMPERATURE, Units.C);
        let precip1 = precipitation("2020-10-10", Place.HORSENS, 100, Type.PRECIPITATION, Units.MM, "Rain");
        let cloudCoverage1 = cloudCoverage("2020-10-10", Place.HORSENS, 70, Type.CLOUD_COVERAGE, Units.PERCENT, "North");
        let wind1 = wind("2020-10-10", Place.HORSENS, 10, Type.WIND_SPEED, Units.MS, "North");

        const weatherData = [temp1, precip1, cloudCoverage1, wind1] */
  
        
         if (!temperature) {
            console.error('Temperature is required');
            return;
        }

        const weatherData = {
            city,
            temperature,
        }; 

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
