// This script handles the navigation bar"s hide/show functionality based on scroll direction.
// It implements a "hide on scroll down, show on scroll up" behavior for the main navigation.
//
// Key functionality:
// 1. Tracks the last known scroll position to determine scroll direction
// 2. On scroll down:
//    - Hides the navigation by removing "is-nav-active" class
// 3. On scroll up:
//    - Shows the navigation by adding "is-nav-active" class
//
// Special handling:
// - Checks for mobile navigation state ("is-nav-mobile-active")
// - If mobile nav is active, scroll handling is disabled
//
// The script works with CSS classes defined in global.css that handle
// the smooth transitions and animations of the navigation bar.

document.addEventListener("DOMContentLoaded", () => {
  const navHeader = document.querySelector(".nav-header");
  if (!navHeader) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", (event) => {
    // Exit if mobile nav is active
    if (navHeader.classList.contains("is-nav-mobile-active")) {
      return;
    }

    // Continue
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