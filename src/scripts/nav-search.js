// This script handles the search functionality in the navigation bar.
// It implements a toggle behavior for the search field when the search icon is clicked.
//
// Key functionality:
// 1. Monitors clicks on the search icon (.nav-search-icon .search-icon)
// 2. Controls visibility of the search form (.nav-search-field)
// 3. Toggles between showing and hiding the search field
//
// Show/Hide behavior:
// - When search icon is clicked and field is hidden:
//   * Makes the search field visible by setting display to "block"
// - When search icon is clicked and field is visible:
//   * Hides the search field by setting display to "none"
//
// The script works with CSS classes defined in global.css
// and integrates with the overall navigation functionality.

document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.querySelector(".nav-search-icon .search-icon");
  const searchForm = document.querySelector(".nav-search-field");
  const searchInput = document.querySelector("#vyhledat-nav");

  if (searchIcon && searchForm) {
    // Toggle search fielde
    searchIcon.addEventListener("click", function() {
      if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "block";
        searchInput?.focus();
      } else {
        searchForm.style.display = "none";
      }
    });

    // Handle submission
    searchForm.addEventListener("submit", function(e) {
      const searchValue = searchInput?.value.trim();
      if (!searchValue) {
        // No search term entered = prevent form submission
        e.preventDefault();
      }
    });

    // Handle Enter key (I do not know if this is necessary) - mby for Firefox
    searchInput?.addEventListener("keypress", function(e) {
      if (e.key === "Enter" && searchInput.value.trim()) {
        searchForm.submit();
      }
    });
  }
});