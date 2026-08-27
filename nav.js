document.addEventListener("DOMContentLoaded", () => {
    fetchNavbar();
});
async function fetchNavbar() {
    try{
        const response = await fetch("nav.html");
        if (!response.ok) throw new Error("Failed to load navigation");

        const navbarHTML = await response.text();
        const navbarPlaceholder = document.getElementById("navbar-placeholder")

        if(navbarPlaceholder) {
            navbarPlaceholder.innerHTML = navbarHTML;
            initHamburgerMenu();
        }
    } catch (error) {
        console.error("Error loading navigation:", error);
    }
}

function initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            hamburger.classList.toggle("active");
        });
    }
}
