// This script handles the product filtering functionality.
// It combines text search, price range, and category filtering for the product listing.
//
// Key functionality:
// 1. Maintains original product list for filtering
// 2. Combines multiple filter types:
//    - Text search in product names
//    - Price range filtering
//    - Category checkbox filtering
// 3. Updates product count indicator
// 4. Applies filters in real-time as user inputs change
//
// DOM Elements:
// - Product container: .product-cards
// - Search input: #vyhledat
// - Price inputs: #od and #do
// - Category checkboxes: .filter-by-category input.__checkbox
// - Count indicators: .product-count-indicator
//
// The script provides immediate feedback as filters are adjusted,
// maintaining a responsive and interactive filtering experience.

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".product-cards");
  const searchInput = document.getElementById("vyhledat");
  const priceFromInput = document.getElementById("od");
  const priceToInput = document.getElementById("do");

  // Select only checkboxes in the filtration protocol
  const categoryCheckboxes = document.querySelectorAll(".filter-by-category input.__checkbox");

  // Clone product cards for global filtering and add them to the window object
  const originalProducts = Array.from(container.children).map(item => item.cloneNode(true));
  window.originalProducts = originalProducts;

  // filtering logic both for search and price range
  function applyAllFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const searchWords = searchTerm.split(/\s+/).filter(Boolean);
    const fromValue = priceFromInput.value.trim();
    const toValue = priceToInput.value.trim();
    const filterFrom = fromValue ? parseFloat(fromValue) : null;
    const filterTo = toValue ? parseFloat(toValue) : null;
    
    // Fetch category names from the selected checkboxes
    const selectedCategories = Array.from(categoryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.parentElement.querySelector("span").innerText.trim());
    
    // Filter the original products
    const filteredProducts = window.originalProducts.filter(card => {
      const productName = (card.querySelector(".product-name")?.textContent || '').toLowerCase();
      const textMatch = searchWords.every(word => productName.includes(word));
      
      const price = Number(card.getAttribute("data-price"));
      const priceMatch = ((filterFrom === null || price >= filterFrom) && (filterTo === null || price <= filterTo));
      
      // Check category filtering
      // If no categories are selected, all products are displayed
      let categoryMatch = true;
      if (selectedCategories.length > 0) {

        // Get the product category from the new data atribute
        const productCategories = (card.getAttribute("data-categories") || '')
          .split(',')
          .map(c => c.trim());

        // OR logic
        categoryMatch = selectedCategories.some(cat => productCategories.includes(cat));
      }
      
      return textMatch && priceMatch && categoryMatch;
    });

    container.innerHTML = "";
    filteredProducts.forEach(item => container.appendChild(item.cloneNode(true)));

    // Update the product cont indicator
    updateProductCount(filteredProducts.length);
  }

  // Fix this later
  //*************************************************************
  function updateProductCount(count) {
    const filterTextSpan = document.querySelector(".filter-text span");
    const filterTextSpanMobile = document.querySelector(".filter-text-mobile span");

    let countIndicator = filterTextSpan.querySelector(".product-count-indicator");
    let countIndicatorMobile = filterTextSpanMobile.querySelector(".product-count-indicator-mobile");
    if (!countIndicator || !countIndicatorMobile) {
      countIndicator = document.createElement("span");
      countIndicatorMobile = document.createElement("span");
      filterTextSpan.appendChild(countIndicator);
      filterTextSpanMobile.appendChild(countIndicatorMobile);
    }
    countIndicator.textContent = ` (${count})`;
    countIndicatorMobile.textContent = ` (${count})`;
  }
  //*************************************************************

  // Attach event listeners to search, price, and category checkboxes
  searchInput.addEventListener("input", applyAllFilters);
  priceFromInput.addEventListener("input", applyAllFilters);
  priceToInput.addEventListener("input", applyAllFilters);
  categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", applyAllFilters);
  });
  
  // Run filtering on page load (for nav search query)
  applyAllFilters();
});