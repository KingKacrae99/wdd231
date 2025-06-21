const teamMembers = document.querySelector(".team-members");
 
export async function fetchJson() {
    const response = await fetch('data/team.json')
    const data = await response.json();
    console.log(data);
    getMembers(data)
    
}

export function getMembers(data){
    data.forEach(element => {
        const card = document.createElement('figure')
        card.className = "team-member";
        card.innerHTML += `
                    <img src="${element.photo}" alt="${element.name}" width="100" height="100">
                    <figcaption class="team-details">
                    <h3>${element.name}</h3>
                    <p><strong>${element.specialty}</strong></p>
                    <p>${element.role}</p>
                    </figcaption>
                    `
            teamMembers.appendChild(card) 
    });
}
