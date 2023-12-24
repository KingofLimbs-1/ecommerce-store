// COMPONENTS
document.addEventListener("DOMContentLoaded", async function () {
  // FUNCTIONS

  // Function to load and render components
  const loadComponent = async (componentName, targetElementID) => {
    try {
      const response = await fetch(`/components/${componentName}.html`);
      const html = await response.text();
      const targetElement = document.getElementById(targetElementID);
      if (targetElement) {
        targetElement.innerHTML = html;
      }
    } catch (error) {
      console.error("Error loading the navbar component", error);
    }
  };
  // ...

  // Function to initialize the navbar "shop" button dropdown
  let initializeDropdown = () => {
    let dropdownButton = document.querySelector("#dropdownButton");
    let dropdownItems = document.querySelector("#dropdownItems");

    dropdownButton.addEventListener("click", (event) => {
      // Toggle dropdown visibility
      if (dropdownItems.classList.contains("hidden")) {
        dropdownItems.classList.remove("hidden");
      } else {
        dropdownItems.classList.add("hidden");
      }

      // Stop the event from propagating to the document click event
      event.stopPropagation();
    });
  };
  // ...

  // FUNCTIONS END

  // Load components
  await loadComponent("navbar", "navbar");
  await loadComponent("footer", "footer");
  // ...

  // Run other functionality
  initializeDropdown();
  // ...
});
// ...
