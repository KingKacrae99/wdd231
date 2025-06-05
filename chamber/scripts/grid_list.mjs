export function showGrid(){
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
export function showlist(){
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
