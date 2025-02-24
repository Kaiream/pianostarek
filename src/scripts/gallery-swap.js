// This script handles the product image gallery swap functionality.
// It manages the interactive behavior of clicking gallery thumbnails to swap with the main image.
//
// Key functionality:
// 1. Stores original main image source and alt text
// 2. Adds click listeners to all gallery thumbnail images
// 3. When a thumbnail is clicked:
//    - Swaps the main image src/alt with the clicked thumbnail
//    - Updates the thumbnail with the previous main image
//
// DOM Elements:
// - Main image: .listing-main-image (the large display image)
// - Gallery images: .listing-gallery-image (the clickable thumbnails)
//
// The script provides a seamless way to view different angles of the product
// while maintaining the original image references.

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".listing-main-image");
    const galleryImages = document.querySelectorAll(".listing-gallery-image");

    if (!mainImage || !galleryImages.length) return;

    const originalMainSrc = mainImage.src;
    const originalMainAlt = mainImage.alt;

    // Get all images and add click event listeners
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
          // Swap on click logic
          const currentMainSrc = mainImage.src;
          const currentMainAlt = mainImage.alt;

          mainImage.src = img.src;
          mainImage.alt = img.alt;

          img.src = currentMainSrc;
          img.alt = currentMainAlt;
        });
    });
});