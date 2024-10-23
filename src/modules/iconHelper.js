import clearDay from "../assets/clearDay.png";
import clearNight from "../assets/clearNight.png";
import partlyCloudyDay from "../assets/partlyCloudyDay.png";
import partlyCloudyNight from "../assets/partlyCloudyNight.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import fog from "../assets/fog.png";
import wind from "../assets/wind.png";

const icons = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "cloudy": cloudy,
  "rain": rain,
  "snow": snow,
  "fog": fog,
  "wind": wind,
};

export default function getIcon(icon) {
  return icons[icon];
}