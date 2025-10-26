import axios from "axios";

const API_KEY = import.meta.env.VITE_THENEWS_API_KEY;
const BASE_URL = "https://api.thenewsapi.com/v1/news/top";

export async function fetchNews(category) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_token: API_KEY,
        locale: "us",
        limit: 10,
        categories: category || "general",
      },
    });
    return response.data.data; // 'data' array holds articles
  } catch (error) {
    console.error("Error fetching news: ", error);
    return [];
  }
}
