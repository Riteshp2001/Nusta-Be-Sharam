// Import SCSS for Footer
import "../footer/footer.scss";

const footerContent = {
	info: {
		company: "Nusta Be Sharam",
		year: new Date().getFullYear(),
		tagline: "Nusta Be Sharam is a visionary production.",
	},
	navigation: [
		{ name: "Home", href: "index.html" },
		{ name: "Projects", href: "projects.html" },
		{ name: "About", href: "about.html" },
		{ name: "Contact Us", href: "contact.html" },
	],
	social: [
		{ href: "https://www.instagram.com/nusta_be_sharam/profilecard/?igsh=MTk2bGpjdmFscWVybw==", name: "Instagram" },
		{ href: "https://www.facebook.com/profile.php?id=61566457276162&mibextid=ZbWKwL", name: "Facebook" },
		{ href: "https://www.x.com", name: "LinkedIn" },
	],
};

document.addEventListener("DOMContentLoaded", () => {
	const footerElement = document.querySelector("footer");

	footerElement.innerHTML = `
        <div class="container">
            <div class="wrapper_Col">
                <h5 class="font24 ">${footerContent.info.tagline}</h5>
                <h5 class="font24">
					<span class="magic">
						<span class="magic-text">©${footerContent.info.year} ${footerContent.info.company}</span>
					</span>
				</h5>
            </div>
            <div class="wrapper_Col">
                <div class="links_col">
                    ${footerContent.navigation
											.map(
												(link) =>
													`<a href="${link.href}" class="underLineLink">${link.name}</a>`
											)
											.join("")}
                </div>
                <div class="links_col">
                    ${footerContent.social
											.map(
												(link) =>
													`<a href="${link.href}" target="_blank" class="underLineLink">${link.name}</a>`
											)
											.join("")}
                </div>
            </div>
        </div>
        <h5 class="bigHeading mT100">${footerContent.info.company}</h5>
		<h6 class="creator mT50">made with 🔥 by <a class="creator-link" href="https://riteshpandit.vercel.app/" target="_blank"> Ritesh Pandit</a></h6>
    `;
});
