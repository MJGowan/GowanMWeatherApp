import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage, favorites } from "./localStorage.js";

let search = document.getElementById("search");
let submitBtn = document.getElementById("submitBtn");
let cityState = document.getElementById("cityState");
// let state = document.getElementById("state");
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


// search.addEventListener("keypress", function(e, event){
//     if (e.key == "Enter"){
    //         cityState.innerHTML = search.value;
    //         GetCurrentWeather();  
    //     }
    // })

    
    async function GetCurrentWeather() {
        const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&appid=3e03548e4b5b893a8d7107d354c21c94&units=imperial");
        const data = await promise.json();
    griffinsApi = data;
    
    let cityStuff = griffinsApi.name;

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
    
    dayOneTemp.innerHTML = fiveDayApi.list[4].main.temp + " °F";
    dayTwoTemp.innerHTML = fiveDayApi.list[12].main.temp + " °F";
    dayThreeTemp.innerHTML = fiveDayApi.list[20].main.temp + " °F";
    dayFourTemp.innerHTML = fiveDayApi.list[28].main.temp + " °F";
    dayFiveTemp.innerHTML = fiveDayApi.list[36].main.temp + " °F";
    
    dayOneWeather.innerHTML = fiveDayApi.list[4].weather[0].main;
    dayTwoWeather.innerHTML = fiveDayApi.list[12].weather[0].main;
    dayThreeWeather.innerHTML = fiveDayApi.list[20].weather[0].main;
    dayFourWeather.innerHTML = fiveDayApi.list[28].weather[0].main;
    dayFiveWeather.innerHTML = fiveDayApi.list[36].weather[0].main;
    
    dayOneDate.innerHTML = fiveDayApi.list[4].dt_txt;
    dayTwoDate.innerHTML = fiveDayApi.list[12].dt_txt;
    dayThreeDate.innerHTML = fiveDayApi.list[20].dt_txt;
    dayFourDate.innerHTML = fiveDayApi.list[28].dt_txt;
    dayFiveDate.innerHTML = fiveDayApi.list[36].dt_txt;
    
    console.log("Tomorrow: " + dayOneTemp.innerHTML + ", " + dayOneWeather.innerHTML);
    console.log("Day Two: " + dayTwoTemp.innerHTML + ", " + dayTwoWeather.innerHTML);
    console.log("Day Three: " + dayThreeTemp.innerHTML + ", " + dayThreeWeather.innerHTML);
    console.log("Day Four: " + dayFourTemp.innerHTML + ", " + dayFourWeather.innerHTML);
    console.log("Day Five: " + dayFiveTemp.innerHTML + ", " + dayFiveWeather.innerHTML);
    
    
    
    let insertIconOne = document.getElementById("insertIconOne");
    let insertIconTwo = document.getElementById("insertIconTwo");
    let insertIconThree = document.getElementById("insertIconThree");
    let insertIconFour = document.getElementById("insertIconFour");
    let insertIconFive = document.getElementById("insertIconFive");
    
    let imgOne = document.createElement("img");
    let imgTwo = document.createElement("img");
    let imgThree = document.createElement("img");
    let imgFour = document.createElement("img");
    let imgFive = document.createElement("img");
    
    if(dayOneWeather.innerHTML == "Clear"){
        imgOne.src = "../assets/Sun\ \(1\).png";
        insertIconOne.appendChild(imgOne);
    }else if(dayOneWeather.innerHTML == "Clouds"){
        imgOne.src = "../assets/Cloud\ \(1\).png";
        insertIconOne.appendChild(imgOne);
    }else if(dayOneWeather.innerHTML == "Mist" || dayOneWeather.innerHTML == "Smoke" || dayOneWeather.innerHTML == "Haze" || dayOneWeather.innerHTML == "Dust" || dayOneWeather.innerHTML == "Fog" || dayOneWeather.innerHTML == "Sand" || dayOneWeather.innerHTML == "Dust" || dayOneWeather.innerHTML == "Ash" || dayOneWeather.innerHTML == "Squall" || dayOneWeather.innerHTML == "Tornado"){
        imgOne.src = "../assets/CloudFog\ \(1\).png";
        insertIconOne.appendChild(imgOne);
    }else if(dayOneWeather.innerHTML == "Snow"){
        imgOne.src = "../assets/CloudSnow\ \(1\).png";
        insertIconOne.appendChild(imgOne);
    }else if(dayOneWeather.innerHTML == "Rain" || dayOneWeather.innerHTML == "Drizzle"){
        imgOne.src = "../assets/CloudRain\ \(1\).png";
        insertIconOne.appendChild(imgOne);
    }else if(dayOneWeather.innerHTML == "Thunderstorm"){
        imgOne.src = "../assets/CloudLightning\ \(1\).png";
        insertIconOne.appendChild(imgOne);
    }

    if(dayTwoWeather.innerHTML == "Clear"){
        imgTwo.src = "../assets/Sun\ \(1\).png";
        insertIconTwo.appendChild(imgTwo);
    }else if(dayTwoWeather.innerHTML == "Clouds"){
        imgTwo.src = "../assets/Cloud\ \(1\).png";
        insertIconTwo.appendChild(imgTwo);
    }else if(dayTwoWeather.innerHTML == "Mist" || dayTwoWeather.innerHTML == "Smoke" || dayTwoWeather.innerHTML == "Haze" || dayTwoWeather.innerHTML == "Dust" || dayTwoWeather.innerHTML == "Fog" || dayTwoWeather.innerHTML == "Sand" || dayTwoWeather.innerHTML == "Dust" || dayTwoWeather.innerHTML == "Ash" || dayTwoWeather.innerHTML == "Squall" || dayTwoWeather.innerHTML == "Tornado"){
        imgTwo.src = "../assets/CloudFog\ \(1\).png";
        insertIconTwo.appendChild(imgTwo);
    }else if(dayTwoWeather.innerHTML == "Snow"){
        imgTwo.src = "../assets/CloudSnow\ \(1\).png";
        insertIconTwo.appendChild(imgTwo);
    }else if(dayTwoWeather.innerHTML == "Rain" || dayTwoWeather.innerHTML == "Drizzle"){
        imgTwo.src = "../assets/CloudRain\ \(1\).png";
        insertIconTwo.appendChild(imgTwo);
    }else if(dayTwoWeather.innerHTML == "Thunderstorm"){
        imgTwo.src = "../assets/CloudLightning\ \(1\).png";
        insertIconTwo.appendChild(imgTwo);
    }
    
    if(dayThreeWeather.innerHTML == "Clear"){
        imgThree.src = "../assets/Sun\ \(1\).png";
        insertIconThree.appendChild(imgThree);
    }else if(dayThreeWeather.innerHTML == "Clouds"){
        imgThree.src = "../assets/Cloud\ \(1\).png";
        insertIconThree.appendChild(imgThree);
    }else if(dayThreeWeather.innerHTML == "Mist" || dayThreeWeather.innerHTML == "Smoke" || dayThreeWeather.innerHTML == "Haze" || dayThreeWeather.innerHTML == "Dust" || dayThreeWeather.innerHTML == "Fog" || dayThreeWeather.innerHTML == "Sand" || dayThreeWeather.innerHTML == "Dust" || dayThreeWeather.innerHTML == "Ash" || dayThreeWeather.innerHTML == "Squall" || dayThreeWeather.innerHTML == "Tornado"){
        imgThree.src = "../assets/CloudFog\ \(1\).png";
        insertIconThree.appendChild(imgThree);
    }else if(dayThreeWeather.innerHTML == "Snow"){
        imgThree.src = "../assets/CloudSnow\ \(1\).png";
        insertIconThree.appendChild(imgThree);
    }else if(dayThreeWeather.innerHTML == "Rain" || dayThreeWeather.innerHTML == "Drizzle"){
        imgThree.src = "../assets/CloudRain\ \(1\).png";
        insertIconThree.appendChild(imgThree);
    }else if(dayThreeWeather.innerHTML == "Thunderstorm"){
        imgThree.src = "../assets/CloudLightning\ \(1\).png";
        insertIconThree.appendChild(imgThree);
    }
    
    if(dayFourWeather.innerHTML == "Clear"){
        imgFour.src = "../assets/Sun\ \(1\).png";
        insertIconFour.appendChild(imgFour);
    }else if(dayFourWeather.innerHTML == "Clouds"){
        imgFour.src = "../assets/Cloud\ \(1\).png";
        insertIconFour.appendChild(imgFour);
    }else if(dayFourWeather.innerHTML == "Mist" || dayFourWeather.innerHTML == "Smoke" || dayFourWeather.innerHTML == "Haze" || dayFourWeather.innerHTML == "Dust" || dayFourWeather.innerHTML == "Fog" || dayFourWeather.innerHTML == "Sand" || dayFourWeather.innerHTML == "Dust" || dayFourWeather.innerHTML == "Ash" || dayFourWeather.innerHTML == "Squall" || dayFourWeather.innerHTML == "Tornado"){
        imgFour.src = "../assets/CloudFog\ \(1\).png";
        insertIconFour.appendChild(imgFour);
    }else if(dayFourWeather.innerHTML == "Snow"){
        imgFour.src = "../assets/CloudSnow\ \(1\).png";
        insertIconFour.appendChild(imgFour);
    }else if(dayFourWeather.innerHTML == "Rain" || dayFourWeather.innerHTML == "Drizzle"){
        imgFour.src = "../assets/CloudRain\ \(1\).png";
        insertIconFour.appendChild(imgFour);
    }else if(dayFourWeather.innerHTML == "Thunderstorm"){
        imgFour.src = "../assets/CloudLightning\ \(1\).png";
        insertIconFour.appendChild(imgFour);
    }
    
    if(dayFiveWeather.innerHTML == "Clear"){
        imgFive.src = "../assets/Sun\ \(1\).png";
        insertIconFive.appendChild(imgFive);
    }else if(dayFiveWeather.innerHTML == "Clouds"){
        imgFive.src = "../assets/Cloud\ \(1\).png";
        insertIconFive.appendChild(imgFive);
    }else if(dayFiveWeather.innerHTML == "Mist" || dayFiveWeather.innerHTML == "Smoke" || dayFiveWeather.innerHTML == "Haze" || dayFiveWeather.innerHTML == "Dust" || dayFiveWeather.innerHTML == "Fog" || dayFiveWeather.innerHTML == "Sand" || dayFiveWeather.innerHTML == "Dust" || dayFiveWeather.innerHTML == "Ash" || dayFiveWeather.innerHTML == "Squall" || dayFiveWeather.innerHTML == "Tornado"){
        imgFive.src = "../assets/CloudFog\ \(1\).png";
        insertIconFive.appendChild(imgFive);
    }else if(dayFiveWeather.innerHTML == "Snow"){
        imgFive.src = "../assets/CloudSnow\ \(1\).png";
        insertIconFive.appendChild(imgFive);
    }else if(dayFiveWeather.innerHTML == "Rain" || dayFiveWeather.innerHTML == "Drizzle"){
        imgFive.src = "../assets/CloudRain\ \(1\).png";
        insertIconFive.appendChild(imgFive);
    }else if(dayFiveWeather.innerHTML == "Thunderstorm"){
        imgFive.src = "../assets/CloudLightning\ \(1\).png";
        insertIconFive.appendChild(imgFive);
    }
    
    
    
    
    
    
}

let favBtn = document.getElementById("favBtn");

let favOne = document.getElementById("favOne");
let favTwo = document.getElementById("favTwo");
let favThree = document.getElementById("favThree");
let favFour = document.getElementById("favFour");
let favFive = document.getElementById("favFive");



favBtn.addEventListener("click", function(e){
    e.preventDefault();
    addAndRemove(cityState.textContent);
    console.log(favorites);
})

function addAndRemove(addFav){
    getLocalStorage();
    console.log(addFav);

    if (favorites.includes(addFav)){
        removeFromLocalStorage(addFav);
    }else{
        saveToLocalStorage(addFav);
    }
    favOne.innerHTML = favorites[0];
    favTwo.innerText = favorites[1];
    favThree.innerHTML = favorites[2];
    favFour.innerText = favorites[3];
    favFive.innerHTML = favorites[4];
}


