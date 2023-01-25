let search = document.getElementById("search");
let submitBtn = document.getElementById("submitBtn");
let cityState = document.getElementById("cityState");
let currentTemp = document.getElementById("currentTemp");
let weather = document.getElementById("weather");
let minTemp = document.getElementById("minTemp");
let maxTemp = document.getElementById("maxTemp");

let dayOneTemp = document.getElementById("dayOneTemp");
let dayTwoTemp = document.getElementById("dayTwoTemp");
let dayThreeTemp = document.getElementById("dayThreeTemp");
let dayFourTemp = document.getElementById("dayFourTemp");
let dayFiveTemp = document.getElementById("dayFiveTemp");

let griffinsApi = "";
let fiveDayApi = "";

let latitude = 0;
let longitude = 0;



submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    GetCurrentWeather();
})


async function GetCurrentWeather() {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&appid=3e03548e4b5b893a8d7107d354c21c94&units=imperial");
    const data = await promise.json();
    griffinsApi = data;

    console.log(data);

    latitude = griffinsApi.coord.lat;
    longitude = griffinsApi.coord.lon;
    currentTemp.innerHTML = griffinsApi.main.temp + " °F";
    weather.innerHTML = griffinsApi.weather.main;
    cityState.innerHTML = search.value;

    minTemp.innerHTML = griffinsApi.main.temp_min;
    maxTemp.innerHTML = griffinsApi.main.temp_max;

    console.log("Current Temp: " + griffinsApi.main.temp + " °F");
    console.log("Min Temp: " + minTemp);
    console.log("Max Temp: " + maxTemp);
    console.log("Lat: " + latitude);
    console.log("Lon: " + longitude);
    console.log("Current Weather: " + griffinsApi.weather.description);

    GetFiveDayWeather();
}


async function GetFiveDayWeather() {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=3e03548e4b5b893a8d7107d354c21c94&units=imperial");
    const data = await promise.json();
    fiveDayApi = data;

    dayOneTemp.innerHTML = fiveDayApi.list[1].main.temp;
    dayTwoTemp.innerHTML = fiveDayApi.list[9].main.temp;
    dayThreeTemp.innerHTML = fiveDayApi.list[17].main.temp;
    dayFourTemp.innerHTML = fiveDayApi.list[25].main.temp;
    dayFiveTemp.innerHTML = fiveDayApi.list[33].main.temp;

    console.log("Tomorrow's Temp: " + dayOneTemp.innerHTML);
    console.log("Day Two Temp: " + dayTwoTemp.innerHTML);
    console.log("Day Three Temp: " + dayThreeTemp.innerHTML);
    console.log("Day Four Temp: " + dayFourTemp.innerHTML);
    console.log("Day Five Temp: " + dayFiveTemp.innerHTML);
}
