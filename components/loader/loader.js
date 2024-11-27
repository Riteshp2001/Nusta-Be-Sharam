// Import SCSS for Loader
import "./loader.scss";

// Adding loader for every pages
document.addEventListener("DOMContentLoaded", function () {
	const loader = document.createElement("div");
	loader.className = "loader";

	// Generate the HTML content for the loader
	const loaderHTML = `
            <img  loading="lazy" src="loading.webp" alt="loader">
        `;

	// Set the inner HTML of the loader
	loader.innerHTML = loaderHTML;

	// Append the loader to the body or any other parent element
	document.body.appendChild(loader);
});
