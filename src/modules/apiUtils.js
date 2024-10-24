let apiKey = process.env.API_KEY

const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export async function callWeatherAPI(location) {

  try {
    let response = await fetch( `${apiURL}/${location}?key=${apiKey}`, { mode: "cors" } );
    let data = await response.json();
    return data;
  } catch {
    console.log("Location error");
    return "no result";
  }
};