export const showMembers=((members) =>{
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

function randomSelect(arr){
    let businessMembers = [];
    let count = 0;
    while(count != 3){
        let member = Math.floor(Math.random() * arr.length)
        businessMembers.push(arr[member])
        count++;
    }
    return businessMembers;
}

export function showFewMembers(data){
    const cardHeaders = document.querySelectorAll('.card-header h2');
    const cardMotto = document.querySelectorAll('.card-header p');
    const businessContents = document.querySelectorAll('.card-body');
    let businesses=randomSelect(data)
    businesses.forEach((business, index) => {
        cardHeaders[index].textContent =`${business.name}`;
        cardMotto[index].textContent = `${business.description}`;
        
        const logo = document.createElement('img');
        const unOrderList = document.createElement('ul')
        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', business.name);
        logo.setAttribute('width', 100);

        unOrderList.innerHTML = `<li><strong>Email:</strong>${business.email}</li>
                                 <li><strong>Phone:</strong>${business.phone}</li>
                                 <li><strong>web:</strong>${business.website}</li>`;
        businessContents[index].appendChild(logo);
        businessContents[index].appendChild(unOrderList); 
    });


}