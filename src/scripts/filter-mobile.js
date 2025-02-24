// This script handles the mobile filter overlay functionality.
// It manages the show/hide behavior of the filter panel on mobile devices.
//
// Key functionality:
// 1. Shows filter overlay when filter button is clicked
//    - Makes overlay visible with display: flex
//    - Forces reflow to ensure animation triggers
//    - Adds "active" class for opening animation
//
// 2. Hides filter overlay when close button is clicked
//    - Adds "closing" class for closing animation
//    - Removes "active" class
//    - Waits for animation to complete (150ms)
//    - Hides overlay and removes "closing" class
//
// DOM Elements:
// - Filter button: .filter-button (triggers overlay)
// - Filter overlay: .overlay-filter (the sliding panel)
// - Close button: .close-button (closes overlay)
//
// The script works with CSS animations defined in global.css
// for smooth slide-in/out transitions.

document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.querySelector(".filter-button");
  const overlayFilter = document.querySelector(".overlay-filter");
  const closeButton = document.querySelector(".close-button");

  // Show overlay
  filterButton.addEventListener("click", function () {
    overlayFilter.style.display = "flex";
    overlayFilter.offsetHeight;
    overlayFilter.classList.add("active");
  });

  // Close overlay
  closeButton.addEventListener("click", function () {
    overlayFilter.classList.add("closing");
    overlayFilter.classList.remove("active");

    // Animation
    setTimeout(() => {
      overlayFilter.classList.remove("closing");
      overlayFilter.style.display = "none";
    }, 225);
  });
});