import "../src/styles.css"
import {forecastData} from './api/fetchAPI.js';
import dayjs from "dayjs";

// document.addEventListener("DOMContentLoaded", function() {
//     // Find the element with the class "card"
//     var cardElement = document.querySelector(".card");

//     // Add a click event listener to the card element
//     cardElement.addEventListener("click", function() {
//         // This function will be executed when the card is clicked
//     //   console.log(forecastData("Horsens"))
//     console.log(forecastData("Horsens"))
//     });
// })

let cityForecastData=forecastData("Horsens")

const startTime= dayjs().startOf("D")
const endTime=dayjs().endOf("D")
console.log(startTime, "start TIme")
console.log("end", endTime)
console.log(forecastData("Horsens"), "forecast data")

// const filteredData= cityForecastData.filter(data=>data.time.isAfter(startTime))
// console.log("filtered data", filteredData)
function refreshPage(){
    window.location.reload()
}
const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", refreshPage);