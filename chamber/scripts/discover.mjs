import { getDateTime } from "./date_time.mjs";
import { togglMenu } from "./toggle.mjs";

const container =document.querySelector(".placeContainer");
const message = document.querySelector(".visit-msg");
const url = 'data/discover.json';


async function fetchAPI()  {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.places)
    populator(data.places)
}

function populator(content){
    content.forEach(place => {
        const section = document.createElement("section");
        section.className = "card";
        section.innerHTML = `
                        <h2>${place.name}</h2>
                        <figure>
                            <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200" >
                            <figcaption>
                                <address>${place.address}</address>
                                <p>${place.description}</p>
                            </figcaption>
                        </figure>
                        <div class="learn-more">
                           <button>learn more</button>
                        </div>
                    `;
        container.appendChild(section)
    });
}

function saveLastVisit(){
    const now = new Date()
    const lastVisit ={
        year: now.getFullYear(),
        month: now.getMonth(),
        today: now.getDate(),
        timestamp: now.getTime()
    }
    console.log(now.getDate())

    const visitDate = localStorage.setItem("last-Visit", JSON.stringify(lastVisit))
}
function generateMsg(){
    const lastVisited = JSON.parse(localStorage.getItem("last-Visit")) 

     const now = new Date()
    if (lastVisited){
        if(lastVisited.year === now.getFullYear() && lastVisited.month === now.getMonth() ){
            if(lastVisited.today === now.getDate() && lastVisited.timestamp !== now.getTime()){
                message.textContent = "Back so soon! Awesome";
            }
        } else{
            const dayDiff = Math.floor((lastVisited.timestamp - now.getTime()) / 86400000);
            if (dayDiff === 1){
                message.textContent = `You Last visited ${dayDiff} day ago.`;
            } else{
                message.textContent = `You Last visited ${dayDiff} days ago.`;
            }
        }
    } else {
        message.textContent = "Welcome! Let us know if you have any questions.";
    }     
}

saveLastVisit();
generateMsg()
fetchAPI()
getDateTime();
togglMenu
