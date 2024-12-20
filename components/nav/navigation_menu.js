// Import SCSS for navigation menu
import "./navigation_menu.scss";

// Define images and links
const images = [
	"/nav_img.webp",
	"/nav_img.webp",
	"/nav_img.webp",
	"/nav_img.webp",
];
const topLinks = [
	{ href: "index.html", text: "Home" },
	{ href: "projects.html", text: "Work" },
	{ href: "about.html", text: "About" },
	{ href: "contact.html", text: "Contact Us" },
];
const bottomLinks = [
	{
		href: "https://www.instagram.com/nusta_be_sharam/profilecard/?igsh=MTk2bGpjdmFscWVybw==",
		text: "Instagram",
	},
	{
		href: "https://www.facebook.com/profile.php?id=61566457276162&mibextid=ZbWKwL",
		text: "Facebook",
	},
	{
		href: "https://x.com/Nusta_be_sharam?t=xXFVLrKAsVHd20hD0gMnVw&s=09",
		text: "X (formally Twitter)",
	},
];

document.addEventListener("DOMContentLoaded", function () {
	// Create the navigation menu container
	const navigationMenuContainer = document.createElement("div");
	navigationMenuContainer.classList.add("navigation_menu");

	// Functions to create image and link elements
	const createImageElements = (images) =>
		images
			.map(
				(src, index) =>
					`<img  loading="lazy" src="${src}" alt="nav image" id="img-${
						index + 1
					}">`
			)
			.join("");
	const createLinkElements = (links, isSocialLink = false) =>
		links
			.map(
				(link) => `
        <div class="menu_link_block">
            <a href="${link.href}" class="underLineLink"${
					isSocialLink ? ' target="_blank"' : ""
				}>${link.text}</a>
        </div>`
			)
			.join("");

	// Generate the HTML content for the navigation menu
	const navigationMenuHTML = `
        <!-- Image -->
        <div class="parallax_image">
            ${createImageElements(images)}
        </div>
        <!-- Links -->
        <div class="menu_links">
            <!-- Top Links -->
            <div class="top">
                ${createLinkElements(topLinks)}
            </div>
            <!-- Bottom Links -->
            <div class="bottom">
                ${createLinkElements(bottomLinks, true)}
            </div>
        </div>
    `;

	// Set the inner HTML of the navigation menu container
	navigationMenuContainer.innerHTML = navigationMenuHTML;

	// Append the navigation menu container to the body or any other parent element
	document.body.appendChild(navigationMenuContainer);
});
