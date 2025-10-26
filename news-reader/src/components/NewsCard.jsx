// src/components/NewsCard.jsx
export default function NewsCard({ article }) {
  const { title, description, url, image, source } = article;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/400x200?text=No+Image";
        }}
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {description ? description.slice(0, 120) + "..." : "No description available."}
        </p>

        {/* show source only if available */}
        {source && <p className="text-xs text-gray-500 mb-2">{source}</p>}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
