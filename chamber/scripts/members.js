import { showGrid, showlist } from "./grid_list.mjs";
import { showMembers } from "./business_members.mjs";
import { getDateTime } from "./date_time.mjs";

const cards = document.querySelector('.cards');
const listButton = document.querySelector('#list');
const gridButton = document.querySelector('#grid');
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    if (menuButton.textContent === 'X'){
        menuButton.textContent = '☰';
    }else{
        menuButton.textContent = 'X';
    }
});
async function getMember(){
    const response = await fetch('data/members.json');
    const data = await response.json();

    showMembers(data.members)
}

function displayMenu() {
    listButton.addEventListener('click', showlist);
    gridButton.addEventListener('click',showGrid);
}



getMember();
displayMenu();
getDateTime();

