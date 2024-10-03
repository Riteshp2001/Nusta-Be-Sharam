// Import SCSS for nav
import "./nav.scss";

document.addEventListener("DOMContentLoaded", function () {
	const nav = document.createElement("nav");

	// Generate the HTML content for the hamburger nav
	const navHTML = `
        <a href="index.html" class="logo">
            <span>Nusta Be Sharam</span>
        </a>

        <!-- Hamburger -->
        <div class="hamburger">
            <p>Menu</p>
            <div class="circle">
                <div class="line line1"></div>
                <div class="line line2"></div>
            </div>
        </div>
    `;

	// Set the inner HTML of the nav
	nav.innerHTML = navHTML;

	// Append the nav to the body or any other parent element
	document.body.appendChild(nav);
});
