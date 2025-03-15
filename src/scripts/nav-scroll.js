// This script handles the navigation bar"s hide/show functionality based on scroll direction.
// It implements a "hide on scroll down, show on scroll up" behavior for the main navigation.

document.addEventListener("DOMContentLoaded", () => {
  const navHeader = document.querySelector(".nav-header");
  if (!navHeader) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", (event) => {

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scroll down
      navHeader.classList.remove("is-nav-active");

    } else if (currentScrollY < lastScrollY) {
      // Scroll up
      navHeader.classList.add("is-nav-active");
    }

    lastScrollY = currentScrollY;

  });
});