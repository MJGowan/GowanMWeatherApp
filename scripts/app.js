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

let dayOneWeather = document.getElementById("dayOneWeather");
let dayTwoWeather = document.getElementById("dayTwoWeather");
let dayThreeWeather = document.getElementById("dayThreeWeather");
let dayFourWeather = document.getElementById("dayFourWeather");
let dayFiveWeather = document.getElementById("dayFiveWeather");

let dayOneDate = document.getElementById("dayOneDate");
let dayTwoDate = document.getElementById("dayTwoDate");
let dayThreeDate = document.getElementById("dayThreeDate");
let dayFourDate = document.getElementById("dayFourDate");
let dayFiveDate = document.getElementById("dayFiveDate");

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
    weather.innerHTML = griffinsApi.weather[0].main;
    cityState.innerHTML = search.value;

    minTemp.innerHTML = griffinsApi.main.temp_min + " °F";
    maxTemp.innerHTML = griffinsApi.main.temp_max + " °F";

    console.log("Current Temp: " + griffinsApi.main.temp + " °F");
    console.log("Min Temp: " + minTemp.innerHTML);
    console.log("Max Temp: " + maxTemp.innerHTML);
    console.log("Lat: " + latitude);
    console.log("Lon: " + longitude);
    console.log("Current Weather: " + griffinsApi.weather[0].main);

    GetFiveDayWeather();
}


async function GetFiveDayWeather() {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=3e03548e4b5b893a8d7107d354c21c94&units=imperial");
    const data = await promise.json();
    fiveDayApi = data;

    dayOneTemp.innerHTML = fiveDayApi.list[5].main.temp + " °F";
    dayTwoTemp.innerHTML = fiveDayApi.list[13].main.temp + " °F";
    dayThreeTemp.innerHTML = fiveDayApi.list[21].main.temp + " °F";
    dayFourTemp.innerHTML = fiveDayApi.list[29].main.temp + " °F";
    dayFiveTemp.innerHTML = fiveDayApi.list[37].main.temp + " °F";

    dayOneWeather.innerHTML = fiveDayApi.list[5].weather[0].main;
    dayTwoWeather.innerHTML = fiveDayApi.list[13].weather[0].main;
    dayThreeWeather.innerHTML = fiveDayApi.list[21].weather[0].main;
    dayFourWeather.innerHTML = fiveDayApi.list[29].weather[0].main;
    dayFiveWeather.innerHTML = fiveDayApi.list[37].weather[0].main;

    dayOneDate.innerHTML = fiveDayApi.list[5].dt_txt;
    dayTwoDate.innerHTML = fiveDayApi.list[13].dt_txt;
    dayThreeDate.innerHTML = fiveDayApi.list[21].dt_txt;
    dayFourDate.innerHTML = fiveDayApi.list[29].dt_txt;
    dayFiveDate.innerHTML = fiveDayApi.list[27].dt_txt;

    console.log("Tomorrow: " + dayOneTemp.innerHTML + ", " + dayOneWeather.innerHTML);
    console.log("Day Two: " + dayTwoTemp.innerHTML + ", " + dayTwoWeather.innerHTML);
    console.log("Day Three: " + dayThreeTemp.innerHTML + ", " + dayThreeWeather.innerHTML);
    console.log("Day Four: " + dayFourTemp.innerHTML + ", " + dayFourWeather.innerHTML);
    console.log("Day Five: " + dayFiveTemp.innerHTML + ", " + dayFiveWeather.innerHTML);

}
