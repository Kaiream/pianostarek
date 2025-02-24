// This script handles the sorting functionality for the archive page.
// It provides chronological sorting of archived products by their ID.
//
// Key functionality:
// 1. Maintains original product order for sorting
// 2. Handles two sort directions:
//    - Newest first (descending by ID)
//    - Oldest first (ascending by ID)
// 3. Performs initial sort on page load
// 4. Updates sort order in real-time
//
// DOM Elements:
// - Sort select: .sold-sort
// - Product container: .sold-product-cards
//
// The script provides immediate feedback as sort options change,
// maintaining a responsive and interactive sorting experience.

document.addEventListener("DOMContentLoaded", function() {
  const sortSelect = document.querySelector(".sold-sort");
  const container = document.querySelector(".sold-product-cards");
  if (!sortSelect || !container) return;

  function sortProducts(value = "a") {
    const items = Array.from(container.children);
    items.sort((a, b) => {
      const aId = Number(a.getAttribute("data-id"));
      const bId = Number(b.getAttribute("data-id"));
      
      // a for newest first (descending)
      // b for oldest first (ascending)
      return value === "a" ? bId - aId : aId - bId;
    });
    
    // Rest is the same as in sort-nabidka.js
    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
  }

  sortSelect.value = "a";
  sortProducts("a");

  sortSelect.addEventListener("change", function() {
    sortProducts(sortSelect.value);
  });
});