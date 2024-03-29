const input = document.querySelector(".input-search");

function changeWeather(Data) {
  let name = document.querySelector(".name");
  let time = document.querySelector(".time");
  let temperature = document.querySelector(".temperature .value");
  let shortDesc = document.querySelector(".short-desc");
  let visibility = document.querySelector(".visibility span");
  let wind = document.querySelector(".wind span");
  let cloud = document.querySelector(".cloud span");
  let localTime = new Date(new Date().getTime() + Data.timezone * 1000);
  let localHours = localTime.getUTCHours();
  let localMinutes = localTime.getUTCMinutes();
  let localSeconds = localTime.getUTCSeconds();
  let localDate = localTime.getUTCDate();
  let localMonth = localTime.getUTCMonth() + 1;
  let localYear = localTime.getUTCFullYear();

  time.innerText =
    localMonth +
    "/" +
    localDate +
    "/" +
    localYear +
    " , " +
    localHours +
    ":" +
    localMinutes +
    ":" +
    localSeconds;
  name.innerText = Data.name + " , " + Data.sys.country;
  temperature.innerText = Math.round(Data.main.temp - 273.15);
  shortDesc.innerText = Data.weather[0].main;
  visibility.innerText = Data.visibility + " ms";
  wind.innerText = Data.wind.speed + " (m/s)";
  cloud.innerText = Data.clouds.all + "%";
  if (temperature.innerText <= 18) {
    document.body.className = "cold";
  } else {
    document.body.className = "hot";
  }
}
async function getWeather(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e6a47de4afa7d8a15b78acbce467699`;
  let response = await fetch(api);
  let data = await response.json();
  console.log(data);
  changeWeather(data);
  console.log(data);
}
getWeather("ha noi");
input.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    let city = input.value.trim();
    getWeather(city);
  }
});
