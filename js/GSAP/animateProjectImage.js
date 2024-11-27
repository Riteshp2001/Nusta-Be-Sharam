// Importing GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function animateProjectImage() {
	const projectImages = gsap.utils.toArray(".project_image");

	if (projectImages.length > 0) {
		projectImages.forEach((img) => {
			// Scroll-triggered animation
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

			// Hover effect
			img.addEventListener("mouseenter", () => {
				gsap.to(img, {
					scale: 1.05, // Slightly zoom in
					duration: 0.3, // Smooth transition
					ease: "power2.out",
				});
			});

			img.addEventListener("mouseleave", () => {
				gsap.to(img, {
					scale: 1, // Reset to original size
					duration: 0.3,
					ease: "power2.out",
				});
			});
		});
	}
}