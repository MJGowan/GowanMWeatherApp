let search = document.getElementById("search");
let todayBtn = document.getElementById("todayBtn");
let fiveBtn = document.getElementById("fiveBtn")
let submitBtn = document.getElementById("submitBtn");
let cityState = document.getElementById("cityState");
let currentTemp = document.getElementById("currentTemp");
let weather = document.getElementById("weather");

let griffinsApi = "";
let fiveDayApi = "";

let latitude = 0;
let longitude = 0;

//GetFiveDayWeather();

submitBtn.addEventListener("click", function () {
    GetCurrentWeather();
})


async function GetCurrentWeather() {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&appid=3e03548e4b5b893a8d7107d354c21c94&units=imperial");
    const data = await promise.json();
    griffinsApi = data;

    latitude = griffinsApi.coord.lat;
    longitude = griffinsApi.coord.lon;
    currentTemp.innerHTML = griffinsApi.main.temp + " °F";
    weather.innerHTML = griffinsApi.weather.main;
    cityState.innerHTML = search.value;

    let minTemp = griffinsApi.main.temp_min;
    let maxTemp = griffinsApi.main.temp_max;

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


    //let dayOneTime = fiveDayApi.list[1].dt_text;

    let dayOneTemp = fiveDayApi.list[1].main.temp;
    let dayTwoTemp = fiveDayApi.list[9].main.temp;
    let dayThreeTemp = fiveDayApi.list[17].main.temp;
    let dayFourTemp = fiveDayApi.list[25].main.temp;
    let dayFiveTemp = fiveDayApi.list[33].main.temp;


    //console.log("Day One: " + dayOneTime);
    console.log("Tomorrow's Temp: " + dayOneTemp);
    console.log("Day Two Temp: " + dayTwoTemp);
    console.log("Day Three Temp: " + dayThreeTemp);
    console.log("Day Four Temp: " + dayFourTemp);
    console.log("Day Five Temp: " + dayFiveTemp);
}
