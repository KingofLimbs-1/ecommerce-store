// Display featured product data
let displayFeaturedProducts = (data) => {
  // Limiting array return to only three results, as only three results need to be displayed in the "featured" section
  let featuredProducts = data.slice(0, 3);
  let featuredProductsContainer = document.querySelector("#featuredProducts");
  featuredProducts.forEach((product) => {
    featuredProductsContainer.innerHTML += `
    <a href="/public/views/product.html?id=${product["product_id"]}">
    <div
      class="flex flex-col items-center rounded drop-shadow-md bg-white w-80 h-auto p-2"
      featuredProductCard
    >
      <img
        class="w-auto h-auto"
        src="${product["thumbnail"]}"
        alt="..."
      />
      <span id="name" class="text-xl">
        ${product["name"]}
      </span>
      <span id="price" class="text-lg italic">
        R${product["price"]}
      </span>
    </div>
  </a>`;
  });
};

// Display upcoming product data
let displayUpcomingProducts = (data) => {
    let upcomingProductsContainer = document.querySelector("#upcomingProducts");
  data.forEach((product) => {
    if (product["type"] == "Upcoming") {
        upcomingProductsContainer.innerHTML += 
        `<a href="/public/views/upcomingNotice.html">
        <div
          class="flex flex-col items-center rounded drop-shadow-md bg-white w-80 h-auto p-2"
          upcomingProductCard
        >
          <img
            class="w-auto h-auto"
            src="${product["thumbnail"]}"
            alt="..."
          />
          <span id="name" class="text-xl">${product["name"]}</span>
          <span id="price" class="text-lg italic">TBA</span>
        </div>
      </a>`
    }
  });
};
// ...

// GET request for '/api/all-products' endpoint
fetch("http://localhost:3000/api/all-products")
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response data
    return response.json();
  })
  .then((data) => {
    // Display products function calls
    displayFeaturedProducts(data);
    displayUpcomingProducts(data);
    // ...
  })
  .catch((error) => {
    // Handle any errors that occurred during fetch request
    console.error("Fetch error:", error);
  });
// ...
