// JSON data representing your service items
const services = [
    { number: "01", title: "Commercial & Advertising", image: "serviceAreas1.webp" },
    { number: "02", title: "Architecural", image: "serviceAreas2.webp" },
    { number: "03", title: "Travel & Landscape", image: "serviceAreas3.webp" },
    { number: "04", title: "Events & Weddings", image: "serviceAreas4.webp" },
    { number: "05", title: "Food & Beverage", image: "serviceAreas5.webp" },
    { number: "06", title: "Underwater", image: "serviceAreas6.webp" },
    { number: "07", title: "Portrait", image: "serviceAreas7.webp" },
    { number: "08", title: "Fashion", image: "serviceAreas8.webp" },
    { number: "09", title: "Product", image: "serviceAreas9.webp" },
    { number: "10", title: "Sports", image: "serviceAreas10.webp" },
    { number: "11", title: "Real Estate", image: "serviceAreas11.webp" },
    { number: "12", title: "Editorial", image: "serviceAreas12.webp" }
];

export function fetch_service_areas_data() {
    // Select the wrapper element
    const servicesWrapper = document.querySelector('.services_wrapper');

    // Check the wrapper if its on page then display
    if (servicesWrapper) {
        const servicesHTML = services.map(service => `
            <a href="#a" class="service_item" data-image="${service.image}">
                <div>
                    <p class="font16">${service.number}/</p>
                    <h4 class="font36">${service.title}</h4>
                </div>
                <span>
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </a>
        `).join('');

        servicesWrapper.innerHTML = servicesHTML;
    }
}