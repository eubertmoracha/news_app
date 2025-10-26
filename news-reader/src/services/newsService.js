// src/services/newsService.js
import axios from "axios";

export const fetchNews = async (category = "general") => {
  const API_TOKEN = "6gLZd8YBCuRmC8wf5bN1hZm2tch4pJfQjzOueOt8"; // your key
  const url = `https://api.thenewsapi.com/v1/news/all?locale=us&language=en&categories=${category}&limit=10&api_token=${API_TOKEN}`;

  try {
    const response = await axios.get(url);
    console.log("Fetched news:", response.data);

    // Add images for each article
    return response.data.data.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image_url || "https://via.placeholder.com/400x200?text=No+Image",
      source: article.source,
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
