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