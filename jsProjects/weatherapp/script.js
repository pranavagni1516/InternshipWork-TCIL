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

function switchTab(clickedTab){
    if(clickedTab !=currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }

        else {
            userInfoContainer.classList.remove("active");
            searchForm.classList.remove("active");
            getfromSessionStorage();
        }
    }
};

function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");

    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherInfo(coordinates);
    }
};

async function fetchWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    // make grant invisible
    grantAccessContainer.classList.remove("active");
    // make loader visible
    loadingScreen.classList.add("active");

    // API call
    try{
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await response.JSON();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
        console.log("Error");
    }
};

function renderWeatherInfo(weatherInfo){
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]]");
    const temp = document.querySelector("[data-Temp]]");
    const windspeed = document.querySelector("[data-windspeed]]");
    const humidity = document.querySelector("[data-humidity]]");
    const cloudiness = document.querySelector("[data-cloudiness]]");

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = weatherIcon?.main?.temp;
    windspeed.innerText = weatherIcon?.wind?.speed;
    humidity.innerText = weatherIcon?.main?.humidity;
    cloudiness.innerText = weatherIcon?.clouds?.all;

};



const gAB = document.querySelector("[data-grantAccess");
gAB.addEventListener("click",getLocation);

userTab.addEventListener("click",()=>{
    // pass clicked tab as input
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    // pass clicked tab as input
    switchTab(searchTab);
});