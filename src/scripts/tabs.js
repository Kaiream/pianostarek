// This script handles the tab switching functionality.
// It manages a set of tabs and their corresponding content panels.

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