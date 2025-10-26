import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env variables

const app = express();
app.use(cors());

const API_TOKEN = process.env.VITE_THENEWS_API_KEY; // ✅ Use .env value

// Route to fetch news from TheNewsAPI
app.get("/api/news", async (req, res) => {
  try {
    const category = req.query.category || "general"; // Allow dynamic category
    const response = await axios.get("https://api.thenewsapi.com/v1/news/top", {
      params: {
        api_token: API_TOKEN,
        locale: "us",
        limit: 10,
        categories: category,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({
      error: "Failed to fetch news",
      details: error.response?.data || error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend server running on http://localhost:5000");
});
