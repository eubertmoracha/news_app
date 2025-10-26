// src/components/NewsCard.jsx
export default function NewsCard({ article }) {
  const { title, description, urlToImage, url, author, source } = article;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      {/* ✅ Conditional Image Rendering */}
      {urlToImage ? (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500 font-medium">
          No Image Available
        </div>
      )}

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {description
            ? description.slice(0, 100) + "..."
            : "No description available."}
        </p>
        <p className="text-xs text-gray-500 mb-2">
          {author ? `By ${author}` : "Unknown Author"} —{" "}
          {source?.name || "Unknown Source"}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
