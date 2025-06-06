import { showGrid, showlist } from "./grid_list.mjs";
import { showMembers } from "./business_members.mjs";
import { togglMenu } from "./toggle.mjs";
import { getDateTime } from "./date_time.mjs";


const listButton = document.querySelector('#list');
const gridButton = document.querySelector('#grid');
const cards = document.querySelector('.cards');

const navMenu = document.querySelector('nav ul');

async function getMember(){
    const response = await fetch('data/members.json');
    const data = await response.json();

    showMembers(data.members)
}

function displayMenu() {
    listButton.addEventListener('click', showlist);
    gridButton.addEventListener('click',showGrid);
}

togglMenu
getMember();
displayMenu();
getDateTime();

