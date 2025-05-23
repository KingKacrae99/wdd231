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

const showMembers=((members) =>{
    members.forEach(member => {
        let card = document.createElement('section');
        let logo = document.createElement('img')
        let businessName = document.createElement('h2')
        let description = document.createElement('p')
        let address = document.createElement('p')
        let phone = document.createElement('p')
        let locale = document.createElement('p')
        let website = document.createElement('a')
        
        businessName.textContent = `${member.name}`;
        description.textContent = `${member.description}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', ` ${member.name}-logo`); 
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');
        card.setAttribute('class', 'card');
        website.setAttribute('href', member.website);

        locale.appendChild(website);
        card.appendChild(logo); 
        card.appendChild(businessName);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(locale);

        cards.appendChild(card);
    });
})

function showGrid(){
        const displayStyle = document.querySelector('.cards');
        const cardSection = document.querySelectorAll('.cards section');

        displayStyle.style.display = '';
        displayStyle.style.flexDirection = '';
        cardSection.forEach((card, index)=> {
            card.style.display = '';
            card.style.gridTemplateColumns = '';
            card.style.margin = '';
            card.style.padding = '';

            Array.from(card.children).forEach((child) => {
                child.style.margin = '';
            });

            const cardImage = card.querySelector('img');
            if (cardImage){
                cardImage.style.display = '';   
            }
            
            if ((index + 1) % 2 === 0) {
                card.style.backgroundColor = '';
            } else {
                card.style.backgroundColor = '';
            }

            const heading = card.querySelector('h2');
            heading.style.fontSize = '';
    });
}
function showlist(){
    const displayStyle = document.querySelector('.cards');
    const cardSection = document.querySelectorAll('.cards section');

    displayStyle.style.display = 'flex';
    displayStyle.style.flexDirection = 'column';
    cardSection.forEach((card, index)=> {
        card.style.display = 'grid';
        card.style.gridTemplateColumns = '1fr 2fr 1fr 1fr 1fr';
        card.style.margin = '0';
        card.style.padding = '0.25rem';

        Array.from(card.children).forEach((child) => {
            child.style.margin = '1rem';
        });

        const cardImage = card.querySelector('img');
        if (cardImage){
            cardImage.style.display = 'none';   
        }
        
        if ((index + 1) % 2 === 0) {
            card.style.backgroundColor = '#bbb';
        } else {
            card.style.backgroundColor = '';
        }

        const heading = card.querySelector('h2');
        heading.style.fontSize = '1rem';
    });
}

function displayMenu() {
    if (window.innerWidth >= 768) {
            listButton.addEventListener('click', showlist);
            gridButton.addEventListener('click',showGrid);
    }else if (window.innerWidth < 768) {
        gridButton.addEventListener('click', showGrid);
    }
}

 function getDateTime(){
    const year =  document.querySelector('#thisyear');
    const today = new Date();
    year.textContent = today.getFullYear();
    document.querySelector('#last-updated').innerText=`${document.lastModified}`;
}
getMember();
displayMenu();
getDateTime();

