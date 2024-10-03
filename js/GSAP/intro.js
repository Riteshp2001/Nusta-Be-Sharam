// Importing GSAP
import gsap from "gsap";

// Intro Animation
export function intro() {
    const counter = document.getElementById('counter');
    const introSection = document.querySelector('.intro');
    const heroText = document.querySelector('.hero_text');

    if (!introSection || !counter || !heroText) return;

    gsap.timeline({
        onComplete: () => {
            gsap.to(counter, {
                y: '-500', duration: 1.5, ease: "Expo.easeInOut",
                onComplete: () => counter.remove()
            });
            gsap.to(introSection, {
                y: '-100%', duration: 1.6, delay: .2, ease: "Expo.easeInOut",
                onComplete: () => introSection.remove()
            });
            gsap.from(heroText, {
                y: '50%', opacity: 0, duration: 1.6, delay: .2, ease: "Expo.easeInOut",
            });
        }
    })
        .to(counter, {
            innerText: 100,
            snap: "innerText",
            duration: 4,
            onUpdate: () => {
                const roundedText = `${Math.round(counter.textContent)}`;
                counter.textContent = roundedText;
            },
            ease: "none"
        });
}