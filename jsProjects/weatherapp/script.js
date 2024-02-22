// const api = "f27c81e2ae10b3f5626690bb00d2d69c";

// async function showWeather(){


//     try{
//         let city = "goa";
        
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
//         const data = await response.json();

//         console.log("Weather data -> " + data);
    
//         let newPara = document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    
//         document.body.appendChild(newPara);
//         // renderWeatherInfo(data);
//     }

//     catch(err){
//         console.log("error");
//     }

// };


// function switchTab(clickedTab){
//     apiErrorContainer.classList.remove("active");
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-conatiner");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_KEY = "f27c81e2ae10b3f5626690bb00d2d69c";
currentTab.classList.add("current-tab");