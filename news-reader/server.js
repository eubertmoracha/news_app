// server.js
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const API_TOKEN = "ZrtjOLgsi3emymePtOKx1sSixLQLEVuSdNJtCRuv";

// ✅ Fetch news dynamically by category
app.get("/api/news", async (req, res) => {
  const category = req.query.category || "general";

  try {
    const response = await axios.get("https://api.thenewsapi.com/v1/news/top", {
      params: {
        api_token: API_TOKEN,
        locale: "us",
        limit: 10,
        categories: category, // dynamically use the category
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
  console.log("✅ Backend running on http://localhost:5000");
});
