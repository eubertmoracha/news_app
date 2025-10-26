import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import { fetchNews } from "../services/newsService";
import BackButton from "../components/BackButton";

export default function Social() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews("entertainment,world").then(setArticles);
  }, []);

  return (
    <div>
      <BackButton />
      <h1 className="text-3xl font-bold text-center mt-4 text-pink-600">Social & Culture</h1>
      <NewsList articles={articles} />
    </div>
  );
}
