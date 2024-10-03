// Importing GSAP
import gsap from "gsap";

export function animate_About_Team() {
    const cards = document.querySelectorAll('.teamWrapper .card');
    if (!cards) {
        return;
    }
    cards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'bottom 70%',
                toggleActions: 'play none none reset',
            },
            delay: index * 0.1
        });
    });
}