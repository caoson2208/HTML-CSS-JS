const search = document.querySelector(".search");
const city = document.querySelector(".city");
const time = document.querySelector(".time");
const country = document.querySelector(".country");
const value = document.querySelector(".value");
const shoreDesc = document.querySelector(".shore-desc");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const sun = document.querySelector(".sun span");
const content = document.querySelector(".content");

const body = document.querySelector("body");

async function changeWeatherUI(capitalSearch) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=82c07a586d89db6a53ac4c16931fa642`;

  let data = await fetch(apiURL).then(res => res.json());
  console.log(data);

  if (data.cod == 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    let temp = Math.round(data.main.temp - 273.15);
    value.innerHTML = temp + `<sup>o</sup>C</span>`;
    shoreDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleString("vi");

    console.log(body);
    if (temp >= 25) {
      body.setAttribute("class", "hot");
    } else if (temp < 25) {
      body.setAttribute("class", "cool");
    } else if (temp <= 22) {
      body.setAttribute("class", "warm");
    } else body.setAttribute("class", "cold");
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keypress", e => {
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  }
});

changeWeatherUI("Ho Chi Minh");
