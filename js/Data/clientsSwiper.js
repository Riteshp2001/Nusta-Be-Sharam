// Dynamic Data
const reviews = [
	{
		quote:
			"Recently, we teamed up with Kristijan and his family for content creation with a family-focused approach. Their communication was efficient and clear, and the quality of the photos and videos they produced perfectly captured the essence of our resort. They delivered their work promptly, making them an excellent choice for businesses looking for high-quality, family-oriented content.",
		name: "Mike Green",
		position: "CEO at DIOR",
	},
	{
		quote:
			"The Nusta Be Sharam team has brought their exceptional talent and charm to our properties. Their remarkable work resonated wonderfully with our audience and enhanced our marketing efforts. We eagerly anticipate their return.",
		name: "Mike Green",
		position: "Manager at Cosmic",
	},
	{
		quote:
			"The visuals created have not only enriched our promotional materials but also evoke the emotions and experiences we aim to provide our discerning clientele. It's been a seamless and rewarding partnership, and we're already planning our next project!",
		name: "Elsa Alex",
		position: "Director at Pinterest",
	},
	{
		quote:
			"Recently, we teamed up with Kristijan and his family for content creation with a family-focused approach. Their communication was efficient and clear, and the quality of the photos and videos they produced perfectly captured the essence of our resort. They delivered their work promptly, making them an excellent choice for businesses looking for high-quality, family-oriented content.",
		name: "Mike Green",
		position: "CEO at DIOR",
	},
	{
		quote:
			"The Nusta Be Sharam team has brought their exceptional talent and charm to our properties. Their remarkable work resonated wonderfully with our audience and enhanced our marketing efforts. We eagerly anticipate their return.",
		name: "Mike Green",
		position: "Manager at Cosmic",
	},
	{
		quote:
			"The visuals created have not only enriched our promotional materials but also evoke the emotions and experiences we aim to provide our discerning clientele. It's been a seamless and rewarding partnership, and we're already planning our next project!",
		name: "Elsa Alex",
		position: "Director at Pinterest",
	},
];

// Function to generate swiper slides dynamically
export function generateSwiperSlides() {
	const swiperWrapper = document.querySelector(".swiper-wrapper");
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
