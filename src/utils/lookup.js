// This script handles the combined search and price filtering functionality.
// It provides real-time filtering of products based on text search and price range inputs.
//
// Key functionality:
// 1. Maintains original product list for filtering
// 2. Combines multiple filter types:
//    - Text search in product names (supports multiple words)
//    - Price range filtering (minimum and maximum)
// 3. Handles URL search parameters
// 4. Updates results in real-time
//
// DOM Elements:
// - Product container: .product-cards
// - Search input: #vyhledat
// - Price range inputs: #od (from) and #do (to)
//
// The script provides immediate feedback as search terms or price ranges are adjusted,
// maintaining a responsive and interactive filtering experience.

document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("vyhledat");
  const container = document.querySelector(".product-cards");
  const searchInput = document.getElementById("vyhledat");
  const priceFromInput = document.getElementById("od");
  const priceToInput = document.getElementById("do");

  // Check if all required elements are present
  if (!container || !searchInput || !priceFromInput || !priceToInput) return;

  // Clone product cards for global filtering
  const originalProducts = Array.from(container.children).map(item => item.cloneNode(true));

    // Filtering logic both for search and price range
  function combinedFilter() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const searchWords = searchTerm.split(/\s+/).filter(Boolean);
    const fromValue = priceFromInput.value.trim();
    const toValue = priceToInput.value.trim();
    const filterFrom = fromValue ? parseFloat(fromValue) : null;
    const filterTo = toValue ? parseFloat(toValue) : null;

    // Filter te original products
    const filteredProducts = originalProducts.filter(card => {
      const productName = (card.querySelector(".product-name")?.textContent || '').toLowerCase();
      const textMatch = searchWords.every(word => productName.includes(word));
      const price = Number(card.getAttribute("data-price"));
      const priceMatch = ((filterFrom === null || price >= filterFrom) && (filterTo === null || price <= filterTo));
      
      return textMatch && priceMatch;
    });
    
    container.innerHTML = '';
    filteredProducts.forEach(item => container.appendChild(item.cloneNode(true)));
  }

  // Initial filter on page load
  combinedFilter();

  if (searchQuery) {
    searchInput.value = searchQuery;
    combinedFilter();
  }

  // Listen for input events on search and price fields
  searchInput.addEventListener("input", combinedFilter);
  priceFromInput.addEventListener("input", combinedFilter);
  priceToInput.addEventListener("input", combinedFilter);
});