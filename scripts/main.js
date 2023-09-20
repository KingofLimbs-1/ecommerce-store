// COMPONENTS

// Function to load and render components
let loadComponent = (componentName, targetElementID) => {
  fetch(`/components/${componentName}.html`)
    .then((response) => response.text())
    .then((html) => {
      const targetElement = document.getElementById(targetElementID);
      if (targetElement) {
        targetElement.innerHTML = html;
      }
    })
    .catch((error) => {
      console.error("Error loading the navbar component", error);
    });
};

// Function calls
loadComponent("navbar", "navbar");
loadComponent("footer", "footer");
// ...
