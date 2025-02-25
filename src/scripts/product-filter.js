// This script handles category-based filtering functionality.
// It filters products based on categories, search terms, and price range.
//
// Key functionality:
// 1. Real-time filtering as user changes inputs
// 2. Combines three filter types:
//    - Category checkboxes
//    - Text search (supports multiple words)
//    - Price range
// 3. Updates product count display
//
// DOM Elements:
// - Products: .product-card
// - Search input: #vyhledat
// - Price inputs: #od, #do
// - Category checkboxes: .filter-by-category input.__checkbox
//
// The script provides immediate feedback as search terms, price ranges or category checkboxes are adjusted
// This script is part two of the nav search functionality,
// but it also focuses on all the other filtering shenanigans.


document.addEventListener("DOMContentLoaded", function() {
  // Get search query from URL, decode it and store in the searchQuery variable for later use
  const searchQuery = new URLSearchParams(window.location.search).get("vyhledat");

  const productCards = document.querySelectorAll(".product-card");
  const searchInput = document.getElementById("vyhledat");
  const priceFromInput = document.querySelectorAll(".price-from");
  const priceToInput = document.querySelectorAll(".price-to");
  const categoryCheckboxes = document.querySelectorAll(".filter-by-category input.__checkbox");

  // Check if all required elements are present
  if (!productCards.length || !searchInput || !priceFromInput || !priceToInput) return;

  // Function to update the product count display for both desktop and mobile indicators
  function updateProductCount(count) {
    const countIndicators = [
      document.querySelector(".product-count-indicator"),
      document.querySelector(".product-count-indicator-mobile")
    ];
    
    // For each indicator, update the text content to display the current product count
    countIndicators.forEach(indicator => {
      if (indicator) indicator.textContent = ` (${count})`;
    });
  }

  // Filtering logic for search, price range and categories
  function applyFilters() {

    // The search term is converted to lowercase and trimmed - whitespace characters around the term are removed
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Split the search term into words and remove any empty strings by matching any whitespace character (\s)
    // The plus symbol after \s means "one or more" of the previous character (essentially removing the whitespace characters)
    // The filter(Boolean) method removes any empty strings from the array (false = empty strings, true = non-empty strings)
    const searchWords = searchTerm.split(/\s+/).filter(Boolean);

    // Get value from any of the "from" inputs that has a value
    const minPrice = parseInt([...priceFromInput].find(input => input.value)?.value) || 0;
    // Get value from any of the "to" inputs that has a value
    const maxPrice = parseInt([...priceToInput].find(input => input.value)?.value) || Infinity;

    console.log(searchWords, minPrice, maxPrice)

    // Get selected categories from the array of checkboxes
    const selectedCategories = Array.from(categoryCheckboxes)
    // Filter the checkboxes to only include those that are checked
      .filter(cb => cb.checked)
    // Map through the checked checkboxes to their parent element's span text content (category name)
      .map(cb => cb.parentElement.querySelector("span").textContent.trim());

    // Variable to keep track of the number of visible products
    let visibleCount = 0;

    // Loop through each product card and check if it matches the search term and price range
    productCards.forEach(card => {
      // Select one card, get the product name, and convert it to lowercase or return an empty string if the element is not found
      const name = card.querySelector(".product-name")?.textContent.toLowerCase() || '';

      // Get the price from the data-price attribute of the card, convert it to a floating-point number, or set it to 0 if the attribute is not found
      const price = parseInt(card.dataset.price) || 0;
      const categories = card.dataset.categories?.split(',') || [];

      // Check if the product name includes all search words
      // The .every() method checks if all search terms/words in an array pass a test (provided as a function)
      const matchesSearch = searchWords.length === 0 || searchWords.every(word => name.includes(word));
      
      // Simple price checking logic which returns true if the price is within the specified range
      const matchesPrice = price >= minPrice && price <= maxPrice;

      // Check if the product's categories include at least one of the selected categories
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => categories.includes(cat));
      
      // Display the card if it matches the search term and price range, otherwise hide it
      // If both conditions are true, set the display to: '' ("shows" the card - it actually doesn't do anything since the default value is 'block')
      // If either condition is false, set the display to: 'none' (hides the card)
      const isVisible = matchesSearch && matchesPrice && matchesCategory;
      card.style.display = isVisible ? '' : "none";
      if (isVisible) {
        // Increment the visible count if the card is visible
        visibleCount++
      };
    });

    // Update the product count display with the number of visible products
    updateProductCount(visibleCount);
  }

  // If the search query exists, instantly filter the products
  if (searchQuery) {
    // Set initial search value from the URL if it exists
    searchInput.value = searchQuery;
    // And then call the filterProducts function to filter the products based on the search query in the URL
    applyFilters();
  } else {
    // If there is no query, just update the count with total number of products
    updateProductCount(productCards.length);
  }

  // Add event listeners
  searchInput.addEventListener("input", applyFilters);
  // Add event listeners to all price inputs
  priceFromInput.forEach(input => {
    input.addEventListener("input", (e) => {
      // Sync all "from" inputs
      priceFromInput.forEach(otherInput => {
        // If the input is not the target of the event, set its value to the value of the target
        if (otherInput !== e.target) otherInput.value = e.target.value;
      });
      applyFilters();
    });
  });

  priceToInput.forEach(input => {
    input.addEventListener("input", (e) => {
      // Sync all "to" inputs
      priceToInput.forEach(otherInput => {
        if (otherInput !== e.target) otherInput.value = e.target.value;
      });
      applyFilters();
    });
  });

  // Add event listeners to each category checkbox
  categoryCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));
});