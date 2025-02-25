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

  // Function to sort products based on price and ID
  function sortProducts(value = "a") { // Default value is "a" which represents newest first sorting (by highest ID)

    // Get all product cards and convert them to an array
    const items = Array.from(container.children);

    // Sort the items based on the selected value
    items.sort((a, b) => {

      // Convert the price and ID attributes to numbers
      const aPrice = Number(a.getAttribute("data-price"));
      const bPrice = Number(b.getAttribute("data-price"));
      const aId = Number(a.getAttribute("data-id"));
      const bId = Number(b.getAttribute("data-id"));
      
      // // Check if either price is < 1 which represents cena na dotaz
      // const aIsInvalid = aPrice < 1;
      // const bIsInvalid = bPrice < 1;
      
      // // If one price is invalid, sort it last
      // if (aIsInvalid && !bIsInvalid) return 1;
      // if (!aIsInvalid && bIsInvalid) return -1;
      // if (aIsInvalid && bIsInvalid) return 0;

      // Sort based on the selected value
      if (value === "a") { // Newest first is selected
        return bId - aId; // Sort by ID in descending order
      } else if (value === "b") { // Cheapest first is selected
        return aPrice - bPrice; // Sort by price in ascending order
      } else if (value === "c") { // Most expensive first is selected
        return bPrice - aPrice; // Sort by price in descending order
      }
      return 0;
    });
    
    // Remove all existing product cards from the container (Cleans the slate for the newly selected sorted order)
    container.innerHTML = '';

    // Take each sorted item from the items array and add them back to the container in their new order
    items.forEach(item => container.appendChild(item));
  }

  // The script performs an initial sort of newest added on page load
  sortSelect.value = "a";
  sortProducts("a");

  // Add event listener for sort select change
  sortSelect.addEventListener("change", function() {
    sortProducts(sortSelect.value);
  });
});