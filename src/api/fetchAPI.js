import { populateHourlyForecast, populateLatestMeasurements, populateLastDayStats } from '../../populateData.js';
import dayjs from 'dayjs';
document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');
  
    citySelect.addEventListener('change', () => {
      const selectedCity = citySelect.value;
      fetchWeatherData(selectedCity);
    });
  });
  const headers = { 'Content-Type': 'application/json', Accept: 'application/json'}
 export function fetchWeatherData(city) {
    fetch(`http://localhost:8080/data/${city}`,{method:"GET", body: JSON.stringify(), headers})
      .then(response => {
        if (response.ok) {
         return response.json();
        }else{
         throw new Error('Network response was not ok ' + response.statusText);}
      })
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
const ul= document.getElementById("forecastSection")
const list = document.createDocumentFragment();


  export function forecastData(city) {
    fetch(`http://localhost:8080/forecast/${city}`,{method:"GET", body: JSON.stringify(), headers})
      .then(response => {
        if (response.ok) {
         return response.json(); 
        }else{
        // console.log(response.json(), "response")
       return Promise.reject(response.statusText)
  }})
  
  .then(data=>{
    console.log("data", data)
   let events= data
   events.map(function(event){
    let li = document.createElement('li');
        let type = document.createElement('span');
        let from =document.createElement('span')
        let to=document.createElement('span')
        let time =document.createElement('span')

        type.innerHTML = `${event.type}`;
        from.innerHTML=`${event.from} ${event.unit}`
        to.innerHTML=`${event.to} ${event.unit}`
      
        time.innerHTML=`${dayjs(event.time).hour()}:00`
      li.appendChild(time)
        li.appendChild(type)
        li.appendChild(from)
        li.appendChild(to)
 
        list.appendChild(li)
        ul.appendChild(list)

       
   })
  return data
  })
}