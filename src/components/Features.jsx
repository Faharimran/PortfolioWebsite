import { useState } from "react";
import GlassCard from "./card/GlassCard";

const API_URL = "https://movies-recommendation-system-1-6ltt.onrender.com";
const OMDB_KEY = "b5dddb25";

const fetchPoster = async (movieTitle) => {
  const res = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${OMDB_KEY}`
  );
  const data = await res.json();
  return data.Poster !== "N/A" ? data.Poster : null;
};

const Features = ({ items }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      // Step 1: Get recommendations from your API
      const res = await fetch(`${API_URL}/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie: query }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      // Step 2: Fetch posters for each recommended movie
      const moviesWithPosters = await Promise.all(
        data.recommendations.map(async (title) => ({
          title,
          poster: await fetchPoster(title),
        }))
      );

      setMovies(moviesWithPosters);
    } catch (err) {
      setError("API is waking up, please try again in 30 seconds!");
    }

    setLoading(false);
  };

  return (
    <section className="px-6 py-10" id="features">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Features
      </h2>

      <GlassCard className="w-full p-6">
        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="w-full mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies... (e.g. Avatar)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                w-full py-3 pl-5 pr-28 
                rounded-full 
                bg-white/20 backdrop-blur-md 
                border border-white/30 
                text-white placeholder-white/70
                focus:outline-none focus:ring-2 focus:ring-white/40
              "
            />
            <button
              type="submit"
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                bg-white text-black 
                px-5 py-2 rounded-full 
                font-medium hover:bg-gray-200 transition
              "
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-center mt-4">{error}</p>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="flex gap-4 mt-8 overflow-x-auto pb-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="min-w-[150px] h-[225px] rounded-xl bg-white/10 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Movie Posters */}
        {!loading && movies.length > 0 && (
          <div className="flex gap-4 mt-8 overflow-x-auto pb-2">
            {movies.map((movie, i) => (
              <div key={i} className="min-w-[150px] text-center">
                {movie.poster ? (
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-[150px] h-[225px] object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-[150px] h-[225px] rounded-xl bg-white/10 flex items-center justify-center text-white/50 text-sm">
                    No Poster
                  </div>
                )}
                <p className="text-white text-sm mt-2 font-medium truncate w-[150px]">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </GlassCard>
    </section>
  );
};

export default Features;