// This script handles the tab switching functionality.
// It manages a set of tabs and their corresponding content panels.
//
// Key functionality:
// 1. Initializes tabs on page load
//    - Sets first tab as active
//    - Shows first tab"s content
//    - Hides all other tab content
//
// 2. Handles tab switching
//    - Listens for clicks on tab triggers
//    - Updates tab states (active/inactive)
//    - Shows/hides corresponding content panels
//
// DOM Structure:
// - Tab triggers use .__tab-trigger class
// - Content panels use .tab-content class
// - Uses data-state attribute for tab states
//
// State Management:
// - Active tab: data-state="active"
// - Inactive tabs: data-state="inactive"
// - Content visibility controlled via display: flex/none
//
// The script provides immediate switching between tabs
// without transition animations for optimal performance.

document.addEventListener("DOMContentLoaded", () => {
  const tabTriggers = document.querySelectorAll(".__tab-trigger");
  const tabContents = document.querySelectorAll(".tab-content");

  // First tab is active and hide others using forEach
  tabTriggers.forEach((trigger, index) => {
    if (index === 0) {
      trigger.setAttribute("data-state", "active");
      tabContents[index].style.display = "flex";
    } else {
      trigger.setAttribute("data-state", "inactive");
      tabContents[index].style.display = "none";
    }
  });
  
  // Click trigger for switching tabs
  tabTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {

      // All tabs are inactive
      tabTriggers.forEach(t => t.setAttribute("data-state", "inactive"));

      // Hide content
      tabContents.forEach(content => content.style.display = "none");

      // The clicked tab is now active
      trigger.setAttribute("data-state", "active");

      // Display contents of new active tab
      tabContents[index].style.display = "flex";
    });
  });
});