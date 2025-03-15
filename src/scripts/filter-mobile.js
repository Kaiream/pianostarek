// This script handles the mobile filter overlay functionality.
// It manages the show/hide behavior of the filter panel on mobile devices.
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