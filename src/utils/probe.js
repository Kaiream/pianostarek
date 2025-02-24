// This script handles the search functionality for the archive page.
// It provides real-time filtering of archived products based on text search input.
//
// Key functionality:
// 1. Maintains original product list for filtering
// 2. Handles text search:
//    - Supports multiple word search
//    - Case-insensitive matching
//    - Word-by-word filtering
// 3. Handles URL search parameters
// 4. Updates results in real-time
//
// DOM Elements:
// - Product container: .sold-product-cards
// - Search input: #vyhledat
//
// The script provides immediate feedback as search terms are adjusted,
// maintaining a responsive and interactive filtering experience.

document.addEventListener("DOMContentLoaded", function() {

  // Get the search quey from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("vyhledat");

  const container = document.querySelector(".sold-product-cards");
  const searchInput = document.getElementById("vyhledat");
  
  if (!container || !searchInput) return;
  
  // The latter is similar to the lookup.js script
  const originalProducts = Array.from(container.children).map(item => item.cloneNode(true));

  function searchFilter() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const searchWords = searchTerm.split(/\s+/).filter(Boolean);

    const filteredProducts = originalProducts.filter(card => {
      const productName = (card.querySelector(".product-name")?.textContent || '').toLowerCase();
      return searchWords.every(word => productName.includes(word));
    });
    
    container.innerHTML = '';
    filteredProducts.forEach(item => container.appendChild(item.cloneNode(true)));
  }
  
  if (searchQuery) {
    searchInput.value = searchQuery;
    searchFilter();
  }

  searchInput.addEventListener("input", searchFilter);
});