// GET request for '/api/keycaps' endpoint
fetch("http://localhost:3000/api/keycaps")
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response data
    return response.json();
  })
  .then((data) => {
    // Interact with product data
    console.log(data);
    // ...
  })
  .catch((error) => {
    // Handle any errors that occurred during fetch request
    console.error("Fetch error:", error);
  });
// ...
