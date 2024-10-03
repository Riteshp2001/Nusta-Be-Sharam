import gsap from "gsap";

// All elements with class .grid
const grids = document.querySelectorAll('.grid');

// Function to apply scroll-triggered animations to a given gallery
const applyAnimation = (grid, animationType) => {
    // Child elements of grid
    const gridWrap = grid.querySelector('.grid-wrap');
    const gridItems = grid.querySelectorAll('.grid__item');
    const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
            trigger: gridWrap,
            start: 'top bottom+=5%',
            end: 'bottom top-=5%',
            scrub: true
        }
    });

    // Apply different animations based on type
    switch (animationType) {
        case 'type1':
            // Set some CSS related style values
            grid.style.setProperty('--perspective', '1000px');
            grid.style.setProperty('--grid-inner-scale', '0.5');

            timeline
                .set(gridWrap, {
                    rotationY: 25
                })
                .set(gridItems, {
                    z: () => gsap.utils.random(-1600, 200)
                })
                .fromTo(gridItems, {
                    xPercent: () => gsap.utils.random(-1000, -500)
                }, {
                    xPercent: () => gsap.utils.random(500, 1000)
                }, 0)
                .fromTo(gridItemsInner, {
                    scale: 2
                }, {
                    scale: .5
                }, 0)

            break;

            // Set some CSS related style values
            grid.style.setProperty('--perspective', '2500px');
            grid.style.setProperty('--grid-width', '100%');
            grid.style.setProperty('--grid-gap', '6');
            grid.style.setProperty('--grid-columns', '3');
            grid.style.setProperty('--grid-item-ratio', '1');

            timeline
                .fromTo(gridItems, {
                    transformOrigin: '50% 200%',
                    rotationX: 0,
                    yPercent: 400,
                }, {
                    yPercent: 0,
                    rotationY: 360,
                    opacity: 0.2,
                    scale: 0.8,
                    stagger: 0.03,
                })

            break;

        default:
            console.error('Unknown animation type.');
            break;
    }
}

export function GRIDScroll() {
    grids.forEach((grid, i) => {
        // Determine animation type
        let animationType;
        switch (i % 6) {
            case 0:
                animationType = 'type1';
                break;
        }
        applyAnimation(grid, animationType);
    });
}