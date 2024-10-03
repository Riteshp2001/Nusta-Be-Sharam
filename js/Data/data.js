// ===================================== Home Page
// ===== Service areas
import { fetch_service_areas_data } from "./serviceAreas";

// ===== Client Swiper Data
import { generateSwiperSlides } from "./clientsSwiper";

// ===================================== About Page
// ===== Team Wrapper
import { generateTeamCard } from "./about_Team";

fetch_service_areas_data();
generateSwiperSlides();
generateTeamCard();