import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import { fetchNews } from "../services/newsService";
import BackButton from "../components/BackButton"; // ✅ added

export default function Economy() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews("economy").then(setArticles);
  }, []);

  return (
    <div className="p-4">
      <BackButton /> {/* ✅ back button at top */}
      <h1 className="text-2xl font-bold text-center mt-4">Economy News</h1>
      <NewsList articles={articles} />
    </div>
  );
}
