import gsap from "gsap";

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navigation_menu');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const nav_links = document.querySelectorAll('.menu_link_block > a');
    const nav_images = document.querySelectorAll('.navigation_menu .parallax_image img')
    let isOpen = false;

    const timeline = gsap.timeline({ paused: true });

    timeline
        .to(navMenu, { y: '0%', duration: 0.5, ease: 'power2.out', })
        .to(line1, { rotation: 45, y: 4, duration: 0.5, ease: 'power2.out', scale: 0.9 }, 0)
        .to(line2, { rotation: -45, y: -4, duration: 0.5, ease: 'power2.out', scale: 0.9 }, 0)
        .to(hamburger.querySelector('p'), { textContent: 'Close', duration: 0 }, 0)
        .from(nav_images, { top: "-50%", duration: 1, stagger: 0.1, ease: 'power3.out' })
        .fromTo(nav_links, { y: 70, skewY: 10, }, { y: 0, skewY: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out', delay: -1 });

    hamburger.addEventListener('click', () => {
        if (isOpen) {
            timeline.reverse();
        } else {
            navMenu.style.visibility = 'visible';
            timeline.play();
        }
        isOpen = !isOpen;
    });
});