// Importing GSAP
import gsap from "gsap";

export function animateProjectImage() {
	const projectImages = gsap.utils.toArray(".project_image");

	if (projectImages.length > 0) {
		projectImages.forEach((img) => {
			gsap.fromTo(
				img,
				{ clipPath: "inset(100% 0 0 0)" },
				{
					clipPath: "inset(0% 0 0 0)",
					scrollTrigger: {
						trigger: img,
						start: "top 80%",
						end: "top 50%",
						scrub: 1,
						toggleActions: "play none none reverse",
					},
				}
			);
		});
	}
}
