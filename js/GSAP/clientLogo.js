import gsap from "gsap";

export function animate_Client_logo() {
    const blocks = document.querySelectorAll('.logo_wrapper .block');

    if (blocks) {
        blocks.forEach((block, index) => {
            gsap.from(block, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                stagger: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: block,
                    start: "top 90%",
                    end: "bottom 80%",
                    scrub: true,
                },
            });
        });
    }

}