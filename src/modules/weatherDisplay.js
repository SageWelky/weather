import getIcon from "./iconHelper";

export function displayUpdate(data) {

  console.log(data.currentConditions);
  console.log("DETAILS:");
  console.log(data.currentConditions.conditions);
  document.querySelector('.weather-conditions').innerHTML = data.currentConditions.conditions;
  console.log(data.currentConditions.icon);
  document.querySelector('.weather-icon').src = getIcon(data.currentConditions.icon);
  console.log(data.description);
  document.querySelector('.weather-description').innerHTML = data.description;
  console.log(data.currentConditions.temp);
  document.querySelector('.weather-temp').innerHTML = `${data.currentConditions.temp} °F`;
  console.log(data.currentConditions.feelslike);
  document.querySelector('.weather-feelslike').innerHTML = `${data.currentConditions.feelslike} °F`;
  console.log(data.currentConditions.humidity);
  document.querySelector('.weather-humidity').innerHTML = `${data.currentConditions.humidity}%`;
  console.log(data.currentConditions.precipprob);
  document.querySelector('.weather-precipprob').innerHTML = `${data.currentConditions.precipprob}%`;

  console.log(data.currentConditions.windspeed);
  console.log(data.currentConditions.preciptype);

  console.log("EXTRA:");
  console.log(data.currentConditions.pressure);
  console.log(data.currentConditions.moonphase);


}