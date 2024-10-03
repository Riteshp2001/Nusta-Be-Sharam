import gsap from "gsap";

export function animate_Images_More_about_use() {
    const moreAboutUs = document.querySelector('.more_about_us');
    if (!moreAboutUs) return; // Check if the element exists

    const animateImages = (images, xPercent, rotation) => {
        gsap.set(images, { xPercent: 0, rotation: 0, scale: 1 });
        gsap.to(images, {
            xPercent,
            rotation,
            scale: 0.9,
            ease: 'power3.inOut',
            stagger: 0.01,
            scrollTrigger: {
                trigger: '.more_about_us',
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 1,
            },
        });
    };

    animateImages(document.querySelectorAll('.more_about_us .row .imgLeft'), -50, -20);
    animateImages(document.querySelectorAll('.more_about_us .row .imgRight'), 50, 20);
}
