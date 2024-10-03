// Importing GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Importing Lenis
import Lenis from 'lenis';

// ======================= Home Page
// ===== Project Images
import { animateProjectImage } from "./animateProjectImage";
// ===== Service areas
import { service_areas_hover_animation } from "./serviceAreas";
// ===== More about us
import { animate_Images_More_about_use } from "./moreAboutus";
// ===== Client Logo Images
import { animate_Client_logo } from "./clientLogo";

// ======================= About Page
// ===== Grid Animation
import { GRIDScroll } from "./gridAnimation";
// ===== About Team
import { animate_About_Team } from "./about_team";

gsap.registerPlugin(ScrollTrigger);

// Installation of lennis Smooth Scroll
const initSmoothScroll = () => {
    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    // })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

}

// Right to left animations
const rightToLeftAnimation = () => {
    const rightToLeft = document.querySelectorAll(".animateRight");

    // check the item its in page or not
    if (!rightToLeft) {
        return;
    }

    rightToLeft.forEach((header) => {
        gsap.fromTo(header,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true,
                    toggleActions: "play none none none"
                }
            }
        );
    });
}

// Bottom to top animations
const bottomToTopAnimation = () => {
    const bottomToTop = document.querySelectorAll(".animateTop");
    // check the item its in page or not
    if (!bottomToTop) {
        return;
    }

    bottomToTop.forEach((header) => {
        gsap.fromTo(header,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.5,
                scrollTrigger: {
                    trigger: header,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: true,
                    toggleActions: "play none none none"
                }
            }
        );
    });
}

// Animate border heading
const animateBorderHeading = () => {
    const headings = document.querySelectorAll('.heading');

    if (headings.length > 0) {
        headings.forEach((heading) => {
            const dot = heading.querySelector('.dot');
            const text = heading.querySelector('h4');
            const border = heading.querySelector('.border');

            gsap.timeline({
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    scrub: true,
                },
            })
                .from(dot, { scale: 0, duration: 0.5, ease: 'power1.out' })
                .from(text, { duration: 0.5, opacity: 0, ease: 'power1.out' }, '<')
                .from(border, { width: '0%', duration: 1, ease: 'power1.out' }, '<');
        });
    }
}

// Animate Subpage Header with spinner laoder
export function animateSubpageHeader() {
    const headerElement = document.querySelector(".supPageHeader h1");
    if (headerElement) {
        // Run the animation only if the element exists
        gsap.from(headerElement, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
    }
}

// Installing every anmiations
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    rightToLeftAnimation();
    bottomToTopAnimation();
    animateBorderHeading();
    service_areas_hover_animation();
    animate_Images_More_about_use();
    animateProjectImage();
    animate_Client_logo();
    GRIDScroll();
    animate_About_Team();
});