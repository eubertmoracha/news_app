import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";

export default function Economy() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews("business");
      setArticles(data);
    };
    getNews();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Business News</h1>
      {articles.length > 0 ? (
        <ul className="space-y-4">
          {articles.map((item) => (
            <li key={item.link} className="bg-gray-800 p-4 rounded-lg shadow">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {item.title}
              </a>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}
