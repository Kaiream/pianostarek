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
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("vyhledat");

  const allProductsContainer = document.querySelector(".all-products");
  const visibleContainer = document.querySelector(".sold-product-cards");
  const searchInput = document.getElementById("vyhledat");
  const paginationContainer = document.querySelector(".pagination");
  
  if (!allProductsContainer || !visibleContainer || !searchInput) return;

  // Store all products for reference
  const allProducts = Array.from(allProductsContainer.children);
  const productsPerPage = 12;

  function showFilteredProducts(filteredProducts) {
    visibleContainer.innerHTML = '';
    
    // Show filtered products
    filteredProducts.forEach((product, index) => {
      if (index < productsPerPage) {
        visibleContainer.appendChild(product.cloneNode(true));
      }
    });

    // Update or remove pagination based on results
    if (paginationContainer) {
      paginationContainer.style.display = filteredProducts.length <= productsPerPage ? 'none' : '';
    }
  }

  function filterProducts(searchTerm = '') {
    const terms = searchTerm.toLowerCase().split(' ').filter(term => term.length > 0);
    
    if (terms.length === 0) {
      showFilteredProducts(allProducts);
      return;
    }

    const filteredProducts = allProducts.filter(product => {
      const productText = product.textContent.toLowerCase();
      return terms.every(term => productText.includes(term));
    });

    showFilteredProducts(filteredProducts);
  }

  // Initial search if query exists
  if (searchQuery) {
    searchInput.value = searchQuery;
    filterProducts(searchQuery);
  }

  // Real-time search
  searchInput.addEventListener("input", (e) => {
    filterProducts(e.target.value);
  });
});