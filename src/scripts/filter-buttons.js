// This script handles the filter button collapsable.
// It adds a click event listener to all elements with the class .collapse-button. When clicked, it finds the parent container ( .filter-body ) and the corresponding collapse body ( .collapse-body ). 
// If the collapse body is currently open, it initiates the closing animation by adding the class  closing . After the animation is complete, it removes the  closing  class and hides the element. 
// If the collapse body is currently closed, it makes sure the element is visible before starting the opening animation.
// It does this by setting the display property to  block  and then forcing a reflow. This ensures that the animation triggers. 
// The script is quite flexible and can be used with any number of collapse buttons and bodies. 

document.addEventListener("DOMContentLoaded", function () {
  const collapseButtons = document.querySelectorAll(".collapse-button");

  collapseButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Finding the filter-body parent
      const container = button.closest(".filter-body"); {
        if (!container) return;
      }

      // Finding the corresponding collapse-body
      const collapseBody = container.querySelector(".collapse-body"); {
        if (!collapseBody) return;
      }

      if (collapseBody.classList.contains("active")) {
        collapseBody.classList.add("closing");
        collapseBody.classList.remove("active");

        // Animation timeout
        setTimeout(() => {
          collapseBody.classList.remove("closing");
          collapseBody.style.display = "none";
        }, 50);
      } else {
        collapseBody.style.display = "flex";
        collapseBody.offsetHeight;
        collapseBody.classList.add("active");
      }
    });
  });
});