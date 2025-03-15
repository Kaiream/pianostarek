// This script handles the image zoom functionality for product listings.
// It provides an interactive zoom effect when hovering over the main product image.

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".listing-main-image");
    if (!mainImage) return;

    const zoomLevel = 2; // 100% zoom

    // Add mousemove event listener
    mainImage.addEventListener("mousemove", (e) => {
        // Get image dimensions from the getBoundingClientRect() method
        const rectangle = mainImage.getBoundingClientRect();
        
        // Get mouse position relative to image
        const x = e.clientX - rectangle.left;
        const y = e.clientY - rectangle.top;

        // Calculate percentage positions
        const xPercent = (x / rectangle.width) * 100;
        const yPercent = (y / rectangle.height) * 100;

        // Apply the transform
        mainImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        mainImage.style.transform = `scale(${zoomLevel})`;
    });

    // Add mouseleave event listener
    mainImage.addEventListener("mouseleave", () => {
        // The transform origin will be reset to the center and any applied scales will be reset to default of 1
        mainImage.style.transformOrigin = "center center";
        mainImage.style.transform = "scale(1)";
    });

    // Add these styles dynamically
    const style = document.createElement("style");
    document.head.appendChild(style);
});