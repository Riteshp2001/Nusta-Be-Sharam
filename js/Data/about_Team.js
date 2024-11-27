const teamCard = [
	{
		img: "team1.webp",
		name: "Kunal Dhullarwar",
		role: "Photographer",
	},
];

export function generateTeamCard() {
	const teamWrapper = document.querySelector(".teamWrapper");
	if (teamWrapper) {
		const teamHTML = teamCard
			.map(
				(card) => `
            <div class="card">
                <img  loading="lazy" src="${card.img}" alt="${card.name}">
                <h5 class="font24 mT20">${card.name}</h5>
                <p class="font16">${card.role}</p>
            </div>
        `
			)
			.join("");

		teamWrapper.innerHTML = teamHTML;
	}
}
