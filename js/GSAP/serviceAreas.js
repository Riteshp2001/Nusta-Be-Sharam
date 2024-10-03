import gsap from "gsap";

export function service_areas_hover_animation() {
    const serviceItems = document.querySelectorAll('.service_item');

    // For Hover Image animation
    serviceItems.forEach(item => {
        const image = item.getAttribute('data-image');
        const hoverDiv = document.createElement('div');
        hoverDiv.classList.add('service_Cursor_img');
        item.appendChild(hoverDiv);

        gsap.set(hoverDiv, {
            clipPath: 'inset(0% 100% 0% 0%)',
            backgroundImage: `url(${image})`,
            opacity: 0,
            pointerEvents: 'none'
        });

        const revealAnimation = gsap.timeline({ paused: true })
            .to(hoverDiv, { duration: 0.5, clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, ease: 'power3.inOut' });

        item.addEventListener('mouseenter', () => revealAnimation.play());

        item.addEventListener('mousemove', e => {
            gsap.to(hoverDiv, { duration: 0.2, x: e.clientX - (hoverDiv.offsetWidth / 2), y: e.clientY - (hoverDiv.offsetHeight / 2), ease: 'power1.out' });
        });

        item.addEventListener('mouseleave', () => revealAnimation.reverse());
    });

    // On scroll animation
    serviceItems.forEach(item => {
        gsap.from(item, {
            opacity: 0,
            // yPercent: 10,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 60%',
                scrub: true,
            }
        });
    });
}