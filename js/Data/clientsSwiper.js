// Dynamic Data
const reviews = [
	{
		quote:
			"We had the pleasure of working with Kunal and his team. Their photography captured the vibrant essence of our resort with an artistic touch. The photos truly tell a story, making it perfect for showcasing our place in style!",
		name: "Arjun Mehta",
		position: "Manager at Taj Hotels",
	},
	{
		quote:
			"The photography team delivered outstanding work! The colors, lighting, and attention to detail were impeccable. Kunal is truly a master of his craft, and his work elevated our brand's image.",
		name: "Pooja Sharma",
		position: "Director at Oberoi Hotels",
	},
	{
		quote:
			"Kunal's creative vision is remarkable! He turned every shot into a masterpiece. The way he captured the little details made all the difference. Highly recommended for anyone looking for top-notch photography!",
		name: "Ramesh Kumar",
		position: "Owner at Royal Banquets",
	},
];

// Function to generate swiper slides dynamically
export function generateSwiperSlides() {
	const swiperWrapper = document.querySelector("#clientsSwiper");
	if (swiperWrapper) {
		const slideHTML = reviews
			.map(
				(review) => `
            <div class="swiper-slide">
                <div class="top">
                    <i class="fa-solid fa-quote-left"></i>
                    <p class="font16 mT20">${review.quote}</p>
                </div>
                <div class="name mT50">
                    <p class="font24">${review.name}</p>
                    <p class="font16">${review.position}</p>
                </div>
            </div>
        `
			)
			.join("");

		swiperWrapper.innerHTML = slideHTML;
	}
}
