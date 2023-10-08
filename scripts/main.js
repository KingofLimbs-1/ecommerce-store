// COMPONENTS

document.addEventListener("DOMContentLoaded", async function () {
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

  // Load the navbar and footer components
  await loadComponent("navbar", "navbar");
  await loadComponent("footer", "footer");
  // ...
});

// ...
