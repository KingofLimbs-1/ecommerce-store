// Functionality to close and open cart modal

document.addEventListener("DOMContentLoaded", function () {
  // Modal and backdrop references
  const modal = document.querySelector('.relative[role="dialog"]');
  const backdrop = document.querySelector(".bg-gray-500.bg-opacity-75");

  // Function to open the modal
  function openModal() {
    console.log("open");
    modal.removeAttribute("hidden");
    modal.classList.add("translate-x-0");
    backdrop.style.opacity = "1";
  }

  // Function to close the modal
  function closeModal() {
    modal.setAttribute("hidden", "");
    modal.classList.remove("translate-x-0");
    backdrop.style.opacity = "0";
  }

  // Event handler to open the modal when cart button is clicked
  const cartButton = document.querySelector(".cartButton");
  cartButton.addEventListener("click", function () {
    openModal();
  });

  // Event handler to close the modal when close button is clicked
  const closeModalButton = document.querySelector(".closeModalButton");
  closeModalButton.addEventListener("click", function () {
    closeModal();
  });

  // Event handler to close the modal when the backdrop is clicked
  backdrop.addEventListener("click", function () {
    closeModal();
  });

  // Prevent clicks inside the modal from closing it
  const modalContent = document.querySelector(".pointer-events-auto");
  modalContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Close the modal on window load
//   closeModal();
});

// ...
