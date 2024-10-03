import gsap from "gsap";

// Mousemove Image Hover animation
document.addEventListener("DOMContentLoaded", function () {
    const menuImgContainers = document.querySelectorAll(".parallax_image");
    const scales = [0.89, 0.91, 0.93, 0.95];
    let mouse = { x: 0, y: 0 };
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    function update() {
        let dx = mouse.x - cx;
        let dy = mouse.y - cy;

        let tiltx = (dy / cy) * 30;
        let tilty = (dx / cx) * 30;

        menuImgContainers.forEach((menuImgContainer) => {
            gsap.to(menuImgContainer, {
                duration: 2,
                transform: `rotate3d(${tiltx}, ${tilty}, 0, 15deg)`,
                ease: "power3.out",
            });

            const images = menuImgContainer.querySelectorAll("img");
            images.forEach((img, index) => {
                let parallaxX = -(dx * (index + 1)) / 100;
                let parallaxY = -(dy * (index + 1)) / 100;

                let transformStyles = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scales[index]})`;

                gsap.to(img, {
                    duration: 2,
                    transform: transformStyles,
                    ease: "power3.out",
                });
            });
        });
    }

    document.body.addEventListener("mousemove", function (event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        update();
    });
});