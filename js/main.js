// Importing main style file
import '../scss/style.scss';

// Importing Loader Component
import '../components/loader/loader';

// Importing Nav Component
import '../components/nav/nav';
import '../components/nav/navigation_menu';
import '../components/nav/animatingNav';
import '../components/nav/mouseMoveImage';

// Importing Footer Component
import '../components/footer/footer';

// Importing Dynamic Data File
import './Data/data';

// Importing GSAP File
import './GSAP/gsap';

// Importing Intro Animation for landing page
import { intro } from './GSAP/intro';

// Importing subPage header animation
import { animateSubpageHeader } from './GSAP/gsap';

// Importing SwiperJS File
import './clientsSwiper';

// Importing image trail animation file
import './imageTrailAnim/trailAnim_installation';

// Remove Spinning when everything is loaded Loader
function removeLoader() {
    document.body.classList.add('loaded');
    // Run Intro Animation for landing when loader remove;
    intro();
    // Animate Subpage header when loader remove
    animateSubpageHeader();
}
window.addEventListener('load', removeLoader);