export default function showForecast(data){
    const foreCast= document.querySelector('.weather-forecast');

    //Adds Paragraph element into the weather-forecast 
    let paraGraph1 = document.createElement('p');
    let paraGraph2 = document.createElement('p');
    let paraGraph3 = document.createElement('p');

    let days = ['Sunday','Monday','Tuesday','Wenesday','Thursday','Friday', 'Saturday']

    //get the date object from the API data 
    const now= new Date(data.list[0].dt * 1000);
    const after= new Date(data.list[8].dt * 1000);
    const nextAfter= new Date(data.list[16].dt * 1000);

    // get the index day of the specific week
    const today = now.getDay();
    const tomorrow = after.getDay();
    const nextTomorrow = nextAfter.getDay();

    paraGraph1.innerHTML = `Today: <strong>${data.list[0].main.temp}&deg;C</strong>`;
    paraGraph2.innerHTML = `${days[tomorrow]}: <strong>${data.list[1].main.temp}&deg;C</strong>`;
    paraGraph3.innerHTML = `${days[nextTomorrow]}: <strong>${data.list[2].main.temp}&deg;C</strong>`;

    foreCast.appendChild(paraGraph1);
    foreCast.appendChild(paraGraph2);
    foreCast.appendChild(paraGraph3);
}