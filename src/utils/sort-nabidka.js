// This script handles the sorting functionality for the product listing page.
// It provides multiple sorting options for products based on price and ID.
//
// Key functionality:
// 1. Maintains original product order for sorting
// 2. Handles three sort directions:
//    - Newest first (descending by ID)
//    - Cheapest first (ascending by price)
//    - Most expensive first (descending by price)
// 3. Handles special price cases:
//    - Products with price < 1 are sorted last
//    - Equal invalid prices maintain relative order
// 4. Performs initial sort on page load
// 5. Updates sort order in real-time
//
// DOM Elements:
// - Sort select: .offer-sort
// - Product container: .product-cards
//
// The script provides immediate feedback as sort options change,
// maintaining a responsive and interactive sorting experience.

document.addEventListener("DOMContentLoaded", function() {
  const sortSelect = document.querySelector(".offer-sort");
  const container = document.querySelector(".product-cards");

  // Check if all required elements are preset
  if (!sortSelect || !container) return;

  function sortProducts(value = "a") {
    const items = Array.from(container.children);
    items.sort((a, b) => {
      const aPrice = Number(a.getAttribute("data-price"));
      const bPrice = Number(b.getAttribute("data-price"));
      const aId = Number(a.getAttribute("data-id"));
      const bId = Number(b.getAttribute("data-id"));
      
      // Check if either price is < 1 wch represents cena na dotaz
      const aIsInvalid = aPrice < 1;
      const bIsInvalid = bPrice < 1;
      
      // If one price is invalid, sort it last
      if (aIsInvalid && !bIsInvalid) return 1;
      if (!aIsInvalid && bIsInvalid) return -1;
      if (aIsInvalid && bIsInvalid) return 0;

      // Regular sorting logic for valid prices
      if (value === "a") {
        return bId - aId;
      } else if (value === "b") {
        return aPrice - bPrice;
      } else if (value === "c") {
        return bPrice - aPrice;
      }
      return 0;
    });
    
    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
  }

  // Set initial sort value and preform sort
  sortSelect.value = "a";
  sortProducts("a");

  // Handle manual sort changes
  sortSelect.addEventListener("change", function() {
    sortProducts(sortSelect.value);
  });
});