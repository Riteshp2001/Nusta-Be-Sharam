import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

const OPTIONS = { align: "start", loop: true };
const AUTO_PLAY_OPTIONS = { delay: 4000 }; // Adjust the delay as needed

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");

// Initialize Embla with Autoplay
const autoplay = Autoplay(AUTO_PLAY_OPTIONS);
const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [autoplay]);

// Add event listeners to control autoplay behavior
emblaApi.on("pointerDown", () => autoplay.stop()); // Stop autoplay when user starts dragging
emblaApi.on("settle", () => autoplay.play()); // Resume autoplay after dragging ends
emblaApi.on("select", () => autoplay.play()); // Ensure autoplay restarts after user selects a slide
