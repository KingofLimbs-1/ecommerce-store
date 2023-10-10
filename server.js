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

// 'Products🎱' table
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
// ...

// Asynchronous function that fetches necessary data from DB and then starts server
async function startServer() {
  try {
    // multiple fetchProducts calls and await them
    await Promise.all([
      fetchProducts("keyboards", "Keyboard"),
      fetchProducts("keycaps", "Keycap"),
      fetchProducts("switches", "Switch"),
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
