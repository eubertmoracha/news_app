import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-10 tracking-wide text-blue-400 drop-shadow-lg">
        Welcome to <span className="text-white">NewsReader</span>
      </h1>
      <p className="text-center text-gray-300 mb-16 text-lg">
        Stay informed with the latest insights across <span className="text-blue-400">Economy</span>,{" "}
        <span className="text-blue-400">Politics</span>,{" "}
        <span className="text-blue-400">Social Trends</span>, and{" "}
        <span className="text-blue-400">Sports</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Economy */}
        <Link
          to="/economy"
          className="bg-gray-800 hover:bg-blue-600 transition-all duration-300 rounded-2xl p-8 shadow-lg hover:shadow-blue-400/50"
        >
          <h2 className="text-3xl font-bold mb-3 font-serif text-blue-400">Economy</h2>
          <p className="text-gray-300">
            Explore global markets, business trends, and key financial insights shaping the world economy.
          </p>
        </Link>

        {/* Politics */}
        <Link
          to="/politics"
          className="bg-gray-800 hover:bg-red-600 transition-all duration-300 rounded-2xl p-8 shadow-lg hover:shadow-red-400/50"
        >
          <h2 className="text-3xl font-bold mb-3 font-serif text-red-400">Politics</h2>
          <p className="text-gray-300">
            Dive into political shifts, elections, and leadership decisions that impact governance worldwide.
          </p>
        </Link>

        {/* Social */}
        <Link
          to="/social"
          className="bg-gray-800 hover:bg-pink-600 transition-all duration-300 rounded-2xl p-8 shadow-lg hover:shadow-pink-400/50"
        >
          <h2 className="text-3xl font-bold mb-3 font-serif text-pink-400">Social</h2>
          <p className="text-gray-300">
            Discover stories about society, culture, and the people shaping our modern world.
          </p>
        </Link>

        {/* Sports */}
        <Link
          to="/sports"
          className="bg-gray-800 hover:bg-green-600 transition-all duration-300 rounded-2xl p-8 shadow-lg hover:shadow-green-400/50"
        >
          <h2 className="text-3xl font-bold mb-3 font-serif text-green-400">Sports</h2>
          <p className="text-gray-300">
            Catch the latest in football, athletics, and major sporting events across the globe.
          </p>
        </Link>
      </div>
    </div>
  );
}
