// Importing GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function animateProjectImage() {
	const projectImages = gsap.utils.toArray(".project_image");

	if (projectImages.length > 0) {
		projectImages.forEach((img) => {
			gsap.fromTo(
				img,
				{
					clipPath: "inset(100% 0 0 0)",
					scale: 0.95, // Start slightly smaller
				},
				{
					clipPath: "inset(0% 0 0 0)",
					scale: 1, // Scale to original size
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