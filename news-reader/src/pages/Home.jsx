import { Link } from "react-router-dom";
<h1 className="text-red-500">Test Tailwind</h1>

export default function Home() {
  const highlights = [
    {
      title: "Politics",
      text: "Stay updated with the latest political stories shaping your world.",
      image: "https://placehold.co/400x200?text=Politics",
      link: "/politics",
    },
    {
      title: "Economy",
      text: "Get insights into business, finance, and tech advancements.",
      image: "https://placehold.co/400x200?text=Economy",
      link: "/economy",
    },
    {
      title: "Social",
      text: "Discover inspiring human stories and cultural highlights.",
      image: "https://placehold.co/400x200?text=Social",
      link: "/social",
    },
    {
      title: "Sports",
      text: "Catch up with live sports news, match results, and updates.",
      image: "https://placehold.co/400x200?text=Sports",
      link: "/sports",
    },
  ];

  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600">Today's Highlights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {highlights.map((h, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={h.image} alt={h.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{h.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{h.text}</p>
              <Link
                to={h.link}
                className="text-blue-500 font-semibold hover:underline"
              >
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
