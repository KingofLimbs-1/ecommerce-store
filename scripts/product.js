// Get clicked on product_id from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
// ...

// Display product images using product_id
let displayProductImagesWithID = (imageData) => {
  let parentImagesContainer = document.querySelector(".imagesContainer");

  imageData.forEach((imagePath) => {
    // Create an image element for each image path
    const imageElement = document.createElement("img");
    const imagePathHTML = `/${imagePath["image_path"]}`;
    imageElement.setAttribute("src", imagePathHTML);
    imageElement.setAttribute("alt", "Product Image");

    // Create a div element for the image container
    const imageDiv = document.createElement("div");
    imageDiv.classList.add(
      "aspect-h-4",
      "aspect-w-3",
      "hidden",
      "overflow-hidden",
      "rounded-lg",
      "lg:block"
    );
    imageDiv.appendChild(imageElement);

    // Append image div to the parent container
    parentImagesContainer.appendChild(imageDiv);
  });
};
// ...

// Display product data based on product_id
let displayProductDataWithID = (productData) => {
  let productInfoContainer = document.querySelector(".productInfoContainer");
  let productNavigationLinks = document.querySelector(".productNavigation");

  productData.forEach((product) => {
    // Split DB column information
    const specificationsArray = product["specs"].split("\n");
    const includedArray = product["included"].split("\n");
    const compatibilityArray = product["compatibility"].split("\n");
    // ...
    productInfoContainer.innerHTML += `
    <div
              class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 mt-10"
            >
              <div
                id="product-name"
                class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
              >
                <h1
                  class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                >
                  ${product["name"]}
                </h1>
              </div>

              <!-- Options -->
              <div class="mt-4 lg:row-span-3 lg:mt-0">
                <h2 class="sr-only">Product information</h2>
                <p
                  id="product-price"
                  class="text-3xl tracking-tight text-gray-900"
                >
                  R${product["price"]}
                </p>

                <!-- Reviews -->
                <div class="mt-6">
                  <h3 class="sr-only">Reviews</h3>
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        class="text-gray-200 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- Reviews end -->

                <form class="mt-10">
                  <!-- Submit -->
                  <button
                    id="add-to-cart"
                    type="submit"
                    class="mt-10 flex w-full items-center justify-center bg-red-600 px-8 py-3 text-base font-medium transition duration-300 hover:bg-transparent hover:border-black hover:text-gray-900 hover:border-solid border-2 border-transparent"
                  >
                    Add to bag
                  </button>
                  <!-- Submit end -->
                </form>
              </div>

              <div
                class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6 mb-5"
              >
                <!-- Description -->
                <div id="description-container">
                  <h3 class="sr-only">Description</h3>

                  <div class="space-y-6">
                    <p class="text-base text-gray-900"></p>
                  </div>
                </div>
                <!-- Description end -->

                <!-- Specifications -->
                <div id="specifications-container" class="mt-10">
                  <h3 class="text-md font-medium text-gray-500">
                    Specifications
                  </h3>

                  <div class="mt-4">
                    <ul role="list" class="list-disc space-y-2 text-lg">
                    ${specificationsArray
                      .map(
                        (specification) => `<li>${specification.trim()}</li>`
                      )
                      .join("")} 
                    </ul>
                  </div>
                </div>
                <!-- Specifications end -->

                <!-- Included -->
                <div id="included-container" class="mt-10">
                  <h2 class="text-md font-medium text-gray-500">Included</h2>

                  <div class="mt-4 space-y-6">
                  <ul role="list" class="list-disc space-y-2 text-lg">
                  ${includedArray
                    .map((included) => `<li>${included.trim()}</li>`)
                    .join("")} 
                  </ul>
                  </div>
                </div>
                <!-- Included end -->

                <!-- Compatibility -->
                <div id="compatibility-container" class="mt-10">
                  <h2 class="text-md font-medium text-gray-500">
                    Compatibility
                  </h2>

                  <div class="mt-4 space-y-6">
                  <ul role="list" class="list-disc space-y-2 text-lg">
                  ${compatibilityArray
                    .map((compatibility) => `<li>${compatibility.trim()}</li>`)
                    .join("")} 
                  </ul>
                  </div>
                </div>
                <!-- Compatibility end -->
              </div>
            </div>
    `;
    productNavigationLinks.innerHTML += `
    <ol
    role="list"
    class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <li>
      <div class="flex items-center">
        <a href="/public/views/${product["type"]}.html" class="mr-2 text-sm font-medium text-gray-900"
          >${product["type"]}</a
        >
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="currentColor"
          aria-hidden="true"
          class="h-5 w-4 text-gray-300"
        >
          <path
            d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"
          />
        </svg>
      </div>
    </li>

    <li class="text-sm">
      <a
        href="#"
        aria-current="page"
        class="productNameFilter font-medium text-black hover:text-gray-600"
        >${product["name"]}</a
      >
    </li>
  </ol>
  `;
  });
};
// ...

// GET request for '/api/product-images' endpoint
fetch(`http://localhost:3000/api/product-images/${productId}`)
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response data
    return response.json();
  })
  .then((data) => {
    displayProductImagesWithID(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
// ...

// GET/fetch request for '/api/product-data' endpoint
fetch(`http://localhost:3000/api/product-data/${productId}`)
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response data
    return response.json();
  })
  .then((data) => {
    displayProductDataWithID(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
// ...
