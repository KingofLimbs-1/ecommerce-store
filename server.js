// API credentials import from config.js
import config from "./config.js";
// ...

// Database connection
import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();
const port = 3000;
app.use(cors());

const supabaseUrl = config.apiURL;
const supabaseKey = config.apiKey;
const supabase = createClient(supabaseUrl, supabaseKey);
// ...

// API route definitions

// Fetch from 'Products🎱' table with product filters
// Used to display product data in category-specific shop pages
let fetchProducts = (url, productType) => {
  app.get(`/api/${url}`, async (req, res) => {
    try {
      // Fetch product data from database
      const { data, error } = await supabase
        .from("Products🎱")
        .select("*")
        .filter("type", "eq", `${productType}`);

      if (error) {
        throw new Error("Error fetching product data");
      }

      // Send JSON response with product data
      res.json(data);
    } catch (err) {
      // Handle errors with a basic error response
      res.status(500).json({ error: "Internal server error" });
    }
  });
};

// All products from 'Products🎱' table
// Used to display all product images in lookbook markup
let fetchAllProducts = () => {
  app.get("/api/all-products", async (req, res) => {
    try {
      // Fetch all product data from the database
      const { data, error } = await supabase.from("Products🎱").select("*");

      if (error) {
        throw new Error("Error fetching product data");
      }

      // Send JSON response with all product data
      res.json(data);
    } catch (err) {
      // Handle errors with a basic error response
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
// ...

// Fetch product images based on product_id
let fetchProductImages = () => {
  app.get("/api/product-images/:productId", async (req, res) => {
    try {
      const productId = req.params.productId;

      // Fetch associated images for the product by product ID
      const { data: imageData, error: imageError } = await supabase
        .from("Product Images📷")
        .select("image_path")
        .eq("product_id", productId);

      if (imageError) {
        throw new Error("Error fetching product images");
      }

      // Send JSON response with the product images
      res.json(imageData);
    } catch (err) {
      // Handle errors with a basic error response
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
// ...

// Fetch product data based on product_id
let fetchProductDataWithID = () => {
  app.get("/api/product-data/:productId", async (req, res) => {
    try {
      const productId = req.params.productId;

      // Fetch associated images for the product by product ID
      const { data, error } = await supabase
        .from("Products🎱")
        .select("*")
        .eq("product_id", productId);

      if (error) {
        throw new Error("Error fetching product data");
      }

      // Send JSON response with the product images
      res.json(data);
    } catch (err) {
      // Handle errors with a basic error response
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
// ...

// Asynchronous function that fetches necessary data from DB and then starts server
async function startServer() {
  try {
    // multiple fetchProducts calls and await them
    await Promise.all([
      fetchProducts("keyboards", "Keyboards"),
      fetchProducts("keycaps", "Keycaps"),
      fetchProducts("switches", "Switches"),
      fetchAllProducts(),
      fetchProductImages(),
      fetchProductDataWithID(),
    ]);

    // Log if fetching is successful
    console.log("Data fetching complete. Starting the server...");

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Data fetching failed:", error);
  }
}

// startServer function to begin the process
startServer();
// ...
