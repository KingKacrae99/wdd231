 export default function showWeather(data){
    const weatherIcon = document.querySelector('#weather-icon');
    const weatherDetails = document.querySelector('figcaption ul');

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const now = new Date(data.sys.sunrise * 1000);
    const after = new Date(data.sys.sunset * 1000);

    const sunrise = `${now.getHours()}:${now.getMinutes()}am`;
    const sunset=`${after.getHours()}:${after.getMinutes()}pm`;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', data.weather[0].description );
    weatherDetails.innerHTML =`<li><strong>${data.main.temp}&deg;C</strong></li>
                               <li>${data.weather[0].description}</li>
                               <li>High: ${data.main.temp_max}&deg;C</li>
                               <li>Low: ${data.main.temp_min}&deg;C</li>
                               <li>Humidity: ${data.main.humidity}%</li>
                               <li>sunrise: ${sunrise}</li>
                               <li>sunset: ${sunset}</li>`

}