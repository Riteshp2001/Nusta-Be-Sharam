// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

var swiper = new Swiper(".mySwiper", {
    loop: true,
    freeMode: true,
    speed: 600,

    // Responsive breakpoints
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});