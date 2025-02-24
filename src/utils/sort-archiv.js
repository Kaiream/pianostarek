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
  const allProductsContainer = document.querySelector(".all-products");
  const visibleContainer = document.querySelector(".sold-product-cards");
  const paginationContainer = document.querySelector(".pagination");
  
  if (!sortSelect || !allProductsContainer || !visibleContainer) return;

  const productsPerPage = 12;
  const allProducts = Array.from(allProductsContainer.children);

  function sortProducts(value = "a") {
    const sortedProducts = Array.from(allProducts);
    sortedProducts.sort((a, b) => {
      const aId = Number(a.getAttribute("data-id"));
      const bId = Number(b.getAttribute("data-id"));
      return value === "a" ? bId - aId : aId - bId;
    });

    // Update visible container with first page of sorted results
    visibleContainer.innerHTML = '';
    sortedProducts.slice(0, productsPerPage).forEach(item => {
      visibleContainer.appendChild(item.cloneNode(true));
    });

    // Update all products container
    allProductsContainer.innerHTML = '';
    sortedProducts.forEach(item => allProductsContainer.appendChild(item));
  }

  sortSelect.value = "a";
  sortProducts("a");

  sortSelect.addEventListener("change", function() {
    sortProducts(sortSelect.value);
  });
});