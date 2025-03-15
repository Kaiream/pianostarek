// This script handles the product image gallery swap functionality.
// It manages the interactive behavior of clicking gallery thumbnails to swap with the main image.

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".listing-main-image");
    const galleryImages = document.querySelectorAll(".listing-gallery-image");

    // Check if elements exist
    if (!mainImage || !galleryImages.length) return;

    // For each image add click event listeners
    galleryImages.forEach(img => {
      // If the image is clicked, swap it with the main image
      img.addEventListener("click", () => {
        // Swap the main image src and alt with the clicked thumbnail
        const currentMainSrc = mainImage.src;
        const currentMainAlt = mainImage.alt;

        // Set the main image src and alt to the clicked thumbnail
        mainImage.src = img.src;
        mainImage.alt = img.alt;

        // Update the clicked thumbnail with the previous main image
        img.src = currentMainSrc;
        img.alt = currentMainAlt;
      });
    });
});