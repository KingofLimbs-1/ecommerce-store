// Display product data
let displayProducts = (data) => {
  const productContainer = document.querySelector(".productContainer");
  data.forEach((product) => {
    productContainer.innerHTML += `<div
  class="productCard aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white drop-shadow-md lg:aspect-none group-hover:opacity-75 lg:h-full"
>
  <a href="/public/views/product.html?id=${product["product_id"]}">
    <div>
      <img
        class="w-auto h-auto"
        src="${product["thumbnail"]}"
        alt="..."
      />
      <div id="infoContainer" class="text-center flex flex-col p-2">
        <span id="name" class="text-xl">${product["name"]}</span>
        <span id="price" class="text-lg">R${product["price"]}</span>
      </div>
    </div>
  </a>`;
  });
};
// ...

// GET request for '/api/keyboards' endpoint
fetch("http://localhost:3000/api/keyboards")
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response data
    return response.json();
  })
  .then((data) => {
    // Display products function call
    displayProducts(data);
    // ...
  })
  .catch((error) => {
    // Handle any errors that occurred during fetch request
    console.error("Fetch error:", error);
  });
// ...
