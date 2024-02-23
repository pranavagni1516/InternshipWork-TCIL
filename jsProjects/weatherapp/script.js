// // const api = "f27c81e2ae10b3f5626690bb00d2d69c";

// // async function showWeather(){


// //     try{
// //         let city = "goa";
        
// //         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
// //         const data = await response.json();

// //         console.log("Weather data -> " + data);
    
// //         let newPara = document.createElement('p');
// //         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    
// //         document.body.appendChild(newPara);
// //         // renderWeatherInfo(data);
// //     }

// //     catch(err){
// //         console.log("error");
// //     }

// // };


// // function switchTab(clickedTab){
// //     apiErrorContainer.classList.remove("active");
// // }

// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");
// const userContainer = document.querySelector(".weather-conatiner");
// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// let currentTab = userTab;
// const API_KEY = "f27c81e2ae10b3f5626690bb00d2d69c";
// currentTab.classList.add("current-tab");
// getfromSessionStorage();


// function switchTab(clickedTab){
//     if(clickedTab !=currentTab){
//         currentTab.classList.remove("current-tab");
//         currentTab = clickedTab;
//         currentTab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active")){
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }

//         else {
//             userInfoContainer.classList.remove("active");
//             searchForm.classList.remove("active");
//             getfromSessionStorage();
//         }
//     }
// };

// function getfromSessionStorage(){
//     const localCoordinates = sessionStorage.getItem("user-coordinates");

//     if(!localCoordinates){
//         grantAccessContainer.classList.add("active");
//     }
//     else{
//         const coordinates = JSON.parse(localCoordinates);
//         fetchWeatherInfo(coordinates);
//     }
// };

// async function fetchWeatherInfo(coordinates){
//     const {lat,lon} = coordinates;
//     // make grant invisible
//     grantAccessContainer.classList.remove("active");
//     // make loader visible
//     loadingScreen.classList.add("active");

//     // API call
//     try{
//         const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
//         const data = await response.JSON();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         loadingScreen.classList.remove("active");
//         console.log("Error");
//     }
// };

// function renderWeatherInfo(weatherInfo){
//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryIcon]");
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]]");
//     const temp = document.querySelector("[data-Temp]]");
//     const windspeed = document.querySelector("[data-windspeed]]");
//     const humidity = document.querySelector("[data-humidity]]");
//     const cloudiness = document.querySelector("[data-cloudiness]]");

//     cityName.innerText = weatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = weatherInfo?.main?.temp;
//     windspeed.innerText = weatherInfo?.wind?.speed;
//     humidity.innerText = weatherInfo?.main?.humidity;
//     cloudiness.innerText = weatherInfo?.clouds?.all;

// };

// function showPosition(position){
//     const userCoordinates = {
//         lat:position.coords.latitude,
//         lon:position.coords.longitude
//     }

//     sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
//     fetchWeatherInfo(userCoordinates);
// };

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         // console.log("Errot")
//         alert("Error in location");
//     }
// };

// const gAB = document.querySelector("[data-grantAccess");
// gAB.addEventListener("click",getLocation);

// userTab.addEventListener("click",()=>{
//     // pass clicked tab as input
//     switchTab(userTab);
// });

// searchTab.addEventListener("click",()=>{
//     // pass clicked tab as input
//     switchTab(searchTab);
// });



// let searchInput = document.querySelector("[data-searchInput]");
// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     if(searchInput.value ==="")return;
//     fetchSearchWeatherInfo(searchInput.value);
// });

// async function fetchSearchWeatherInfo(city){
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try{
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();

//         loadingScreen.classList.remove("active");
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         console.log("Error");
//     }
// };

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "f27c81e2ae10b3f5626690bb00d2d69c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = weatherInfo?.main?.temp + " °C";
    windspeed.innertext = weatherInfo?.wind?.speed;
    humidity.innertext = weatherInfo?.main?.humidity;
    cloudiness.innerText = weatherInfo?.clouds?.all;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}