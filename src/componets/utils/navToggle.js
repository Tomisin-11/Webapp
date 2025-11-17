export function initNavbarToggle() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".navbar ul");

    if (!hamburger || !menu) return;

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show-menu");
    });
}
