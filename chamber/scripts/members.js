const cards = document.querySelector('.cards');

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
        logo.setAttribute('alt', ` ${member.name}-logo`); // fill in the blank
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');
        card.setAttribute('class', 'card');
        website.setAttribute('href', member.website);

        locale.appendChild(website);
        card.appendChild(logo); //fill in the blank
        card.appendChild(businessName);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(locale);

        cards.appendChild(card);
    });
})
getMember();