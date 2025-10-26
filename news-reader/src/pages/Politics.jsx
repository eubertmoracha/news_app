import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import { fetchNews } from "../services/newsService";
import BackButton from "../components/BackButton"; 

export default function Politics() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews("politics").then(setArticles);
  }, []);

  return (
    <div className="p-4">
      <BackButton /> {/* ✅ added */}
      <h1 className="text-2xl font-bold text-center mt-4">Politics News</h1>
      <NewsList articles={articles} />
    </div>
  );
}
