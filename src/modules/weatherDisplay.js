import getIcon from "./iconHelper";

export function displayUpdate(data) {

  let weatherDisplay = document.querySelector('.weather-display');
  weatherDisplay.style.visibility = "visible";

  document.querySelector('.weather-conditions').innerHTML = data.currentConditions.conditions;
  document.querySelector('.weather-icon').src = getIcon(data.currentConditions.icon);
  document.querySelector('.weather-description').innerHTML = data.description;
  document.querySelector('.weather-temp').innerHTML = `${data.currentConditions.temp} °F`;
  document.querySelector('.weather-feelslike').innerHTML = `${data.currentConditions.feelslike} °F`;
  document.querySelector('.weather-humidity').innerHTML = `${data.currentConditions.humidity}%`;
  document.querySelector('.weather-precipprob').innerHTML = `${data.currentConditions.precipprob}%`;
}