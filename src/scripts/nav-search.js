// This script handles the search functionality in the navigation bar.
// It implements a toggle behavior for the search field when the search icon is clicked.
//
// This script is only step one of two when performing the navigation search functionality.
// The second step is handling the inserted search term in the URL and subsequently searching through the catalog.
// See product-filter.js in /scripts for more information about what happens when we submit a value.

document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.querySelector(".nav-search-icon .search-icon");
  const searchForm = document.querySelector(".nav-search-field");
  const searchInput = document.querySelector("#vyhledat-nav");

  if (searchIcon && searchForm) {
    // Toggle search field visibility
    searchIcon.addEventListener("click", function() {
      if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "block";
        // Immediate focus on the newly displayed field
        searchInput?.focus();
      } else {
        searchForm.style.display = "none";
      }
    });

    // Handle submission
    searchForm.addEventListener("submit", function(e) {
      // Remove spaces using trim and stores the inputted value
      const searchValue = searchInput?.value.trim();
      if (!searchValue) {
        // No search term entered = prevent form submission
        e.preventDefault();
      }
    });

    // Handle Enter key (I do not know if this is necessary) - maybe for Firefox
    searchInput?.addEventListener("keypress", function(e) {
      if (e.key === "Enter" && searchInput.value.trim()) {
        searchForm.submit();
      }
    });
  }
});