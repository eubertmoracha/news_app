// src/components/NewsList.jsx
import NewsCard from "./NewsCard";

export default function NewsList({ articles }) {
  if (!articles || articles.length === 0) {
    return <p className="text-center mt-8 text-gray-500">No news found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <NewsCard key={article.uuid || index} article={article} />
      ))}
    </div>
  );
}
