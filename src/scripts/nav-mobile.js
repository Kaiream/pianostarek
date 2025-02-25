// This script handles the mobile navigation menu functionality.
// It adds click event listeners to the hamburger button (.hambutton) and manages the mobile overlay menu.
// When the hamburger button is clicked, it checks if the overlay is currently active:
//
// If the overlay is active (menu is open):
// 1. Adds a "closing" class to trigger the closing animation
// 2. Removes the "active" class from both overlay and hamburger button
// 3. Uses setTimeout to wait for the animation to complete (150ms)
// 4. After animation, removes the "closing" class and hides the overlay
//
// If the overlay is not active (menu is closed):
// 1. Makes the overlay visible by setting display to "flex"
// 2. Adds "active" class to both overlay and hamburger button to trigger opening animation
//
// Additionally, it manages the navigation header appearance:
// - Adds "is-nav-mobile-active" class to remove shadow when menu is open
// - Removes the class when menu is closed
//
// The script works in conjunction with CSS animations defined in global.css
// for smooth transitions between states.

document.addEventListener("DOMContentLoaded", function () {
  const hambutton = document.querySelector(".hambutton");
  const overlay = document.querySelector(".overlay");
  const navHeader = document.querySelector(".nav-header");

  hambutton.addEventListener("click", function () {
    if (overlay.classList.contains("active")) {
      // Add the closing class to trigger the animation
      overlay.classList.add("closing");
      overlay.classList.remove("active");
      hambutton.classList.remove("active");

      // Wait for the animation to complete
      setTimeout(function() {
        overlay.classList.remove("closing");
        overlay.style.display = "none";
      }, 150); // This value has to match the CSS animation duration
    } else {
      // If the overlay doesn't have the active class, add it to show it
      overlay.classList.add("active");
      hambutton.classList.add("active");
      overlay.style.display = "flex";
    }

    // Toggle shadow on the navigation header
    if (hambutton.classList.contains("active")) {
      navHeader.classList.add("is-nav-mobile-active");
    } else {
      navHeader.classList.remove("is-nav-mobile-active");
    }
  });
});