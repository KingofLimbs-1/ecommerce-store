// API credentials import from config.js
import config from "./config.js";
// ...

// Database connection
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = config.apiURL;
const supabaseKey = config.apiKey;
const supabase = createClient(supabaseUrl, supabaseKey);
// ...
