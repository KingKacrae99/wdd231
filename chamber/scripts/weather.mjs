import showWeather from "./currentweather.mjs";
import showForecast from "./weatherforecast.mjs";
import { showFewMembers } from "./business_members.mjs";
import { getDateTime } from "./date_time.mjs";

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=9.11&lon=7.39&units=metric&appid=10db7d4bffa3c6ef8f5a503de083d7bd'
const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=9.11&lon=7.39&units=metric&appid=10db7d4bffa3c6ef8f5a503de083d7bd'

async function fetchApi() {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            return showWeather(data)
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forcastURL);
        if (response.ok){
            const data = await response.json();
            return showForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }   
}

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return showFewMembers(data.members);
}

fetchApi();
fetchForecast();
getMembers()
getDateTime();