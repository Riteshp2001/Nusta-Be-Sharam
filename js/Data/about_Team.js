const teamCard = [
    {
        img: "team1.webp",
        name: "Lily Rose",
        role: "Photographer",
    },
    {
        img: "team2.webp",
        name: "John Paul",
        role: "Assistant Photographer",
    },
    {
        img: "team3.webp",
        name: "Emma Grace",
        role: "Studio Manager",
    },
    {
        img: "team4.webp",
        name: "Mark Anthony",
        role: "Digital Retoucher",
    },
    {
        img: "team5.webp",
        name: "Mia Belle",
        role: "Art Director",
    },
    {
        img: "team6.webp",
        name: "James Dean",
        role: "Stylist",
    },
    {
        img: "team7.webp",
        name: "Ava Marie",
        role: "Production Assistant",
    },
    {
        img: "team8.webp",
        name: "David Lee",
        role: "Marketing and Sales",
    },
    {
        img: "team9.webp",
        name: "Zoe Claire",
        role: "Graphic Designer",
    },
    {
        img: "team10.webp",
        name: "Michael Scott",
        role: "Administrative Staff",
    },
];

export function generateTeamCard() {
    const teamWrapper = document.querySelector('.teamWrapper');
    if (teamWrapper) {
        const teamHTML = teamCard.map(card => `
            <div class="card">
                <img src="${card.img}" alt="${card.name}">
                <h5 class="font24 mT20">${card.name}</h5>
                <p class="font16">${card.role}</p>
            </div>
        `).join('');

        teamWrapper.innerHTML = teamHTML;
    }
}