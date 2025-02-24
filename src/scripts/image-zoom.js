// This script handles the image zoom functionality for product listings.
// It provides an interactive zoom effect when hovering over the main product image.
//
// Key functionality:
// 1. Tracks mouse position over the main image
// 2. Calculates zoom origin based on cursor location
// 3. Applies smooth zoom transform when hovering
// 4. Resets image on mouse leave
//
// DOM Elements:
// - Main image: .listing-main-image (the zoomable product image)
//
// The script creates a magnification effect that follows the cursor,
// allowing users to inspect product details more closely.

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".listing-main-image");
    if (!mainImage) return;

    const zoomLevel = 2; // 100% zoom

    mainImage.addEventListener("mousemove", (e) => {
        const rect = mainImage.getBoundingClientRect();
        
        // Get mouse position relative to image
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate percentage positions
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Apply the transform
        mainImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        mainImage.style.transform = `scale(${zoomLevel})`;
    });

    mainImage.addEventListener("mouseleave", () => {
        mainImage.style.transformOrigin = "center center";
        mainImage.style.transform = "scale(1)";
    });

    // Aad these styles dynamically
    const style = document.createElement("style");
    document.head.appendChild(style);
});