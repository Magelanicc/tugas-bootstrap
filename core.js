const filterButtons = document.querySelectorAll(".project-filters button");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");

        const filter = btn.dataset.filter;

        projects.forEach(project => {
          if (filter === "all" || project.dataset.category === filter) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });