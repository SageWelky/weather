import "./styles.css";
import { callWeatherAPI } from "./modules/apiUtils";
import { displayUpdate } from "./modules/weatherDisplay";

async function getWeatherData() {
  let location = document.querySelector('.location-input').value;
  let data = await callWeatherAPI(location);
  //change to ouput information to display
  console.log(data);
  displayUpdate(data);
}

let searchButton = document.querySelector('.search-button');
searchButton.addEventListener( 'click', getWeatherData );

let locationInput = document.querySelector('.location-input');
locationInput.addEventListener('keydown', function (e) {
  if (e.which === 13 && !e.shiftKey) {
    getWeatherData();
  }
});

