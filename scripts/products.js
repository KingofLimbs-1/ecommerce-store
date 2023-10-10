// GET request to fetch all products from '/api/all-products' API endpoint
fetch("http://localhost:3000/api/all-products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    let lookBookContainer = document.querySelector("#lookBookContainer");
    console.log(lookBookContainer);
    data.forEach((product) => {
      lookBookContainer.innerHTML += `<a href="#">
        <div
          class="flex flex-col items-center rounded drop-shadow-md bg-white w-80 h-auto p-2"
          lookBookCard
        >
          <img class="w-auto h-auto" src="${product["thumbnail"]}" alt="..." />
        </div>
      </a>`;
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
// ...
