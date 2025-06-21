const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav ul');

export const togglMenu = menuButton.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    if (menuButton.textContent === 'X'){
        menuButton.textContent = '☰';
    }else{
        menuButton.textContent = 'X';
    }
});