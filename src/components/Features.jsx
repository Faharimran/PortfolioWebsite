import { useState, useRef, useEffect } from "react";
import GlassCard from "./card/GlassCard";
import TitleText from "./titleText/TitleText"

const API_URL = "https://movies-recommendation-system-1-6ltt.onrender.com";
const OMDB_KEY = "b5dddb25";

const SUGGESTED_MOVIES = [
  "Avatar", "Inception", "Interstellar", "The Dark Knight",
  "Titanic", "Avengers: Endgame", "Spectre", "John Carter",
  "The Avengers", "Iron Man", "Gladiator", "The Matrix"
];

const DEFAULT_MOVIES = [
  "Avatar", "Inception", "Interstellar", "The Dark Knight", "Titanic"
];

const fetchPoster = async (movieTitle) => {
  const res = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${OMDB_KEY}`
  );
  const data = await res.json();
  return data.Poster !== "N/A" ? data.Poster : null;
};

const Features = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [defaultLoading, setDefaultLoading] = useState(true);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const filteredSuggestions = query.trim()
    ? SUGGESTED_MOVIES.filter((m) =>
        m.toLowerCase().includes(query.toLowerCase())
      )
    : SUGGESTED_MOVIES;

  // Load default movies on mount
  useEffect(() => {
    const loadDefaults = async () => {
      const moviesWithPosters = await Promise.all(
        DEFAULT_MOVIES.map(async (title) => ({
          title,
          poster: await fetchPoster(title),
        }))
      );
      setMovies(moviesWithPosters);
      setDefaultLoading(false);
    };
    loadDefaults();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async (movieName) => {
    const searchQuery = movieName || query;
    if (!searchQuery.trim()) return;

    setQuery(searchQuery);
    setShowDropdown(false);
    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const res = await fetch(`${API_URL}/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie: searchQuery }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <section className="px-6 py-10" id="features">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Features
      </h2>

      <GlassCard className="w-full p-6">

         <div className=" font-bold w-full flex  mb-5">
          <TitleText title='Movies Recommendation System' ></TitleText>
          </div>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="w-full mx-auto">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search movies... (e.g. Avatar)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
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

            {/* Dropdown */}
            {showDropdown && filteredSuggestions.length > 0 && (
              <div
                ref={dropdownRef}
                className="
                  absolute top-full left-0 right-0 mt-2
                  bg-black/70 backdrop-blur-md
                  border border-white/20
                  rounded-2xl overflow-hidden
                  z-50 shadow-xl
                "
              >
                {filteredSuggestions.map((movie, i) => (
                  <div
                    key={i}
                    onMouseDown={() => handleSearch(movie)}
                    className="
                      px-5 py-3 text-white
                      hover:bg-white/20 cursor-pointer
                      transition text-sm
                      border-b border-white/10 last:border-none
                    "
                  >
                    🎬 {movie}
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>

        {/* Label */}
        <p className="text-white/50 text-sm mt-6 mb-3 px-1">
          {loading ? "Finding recommendations..." : movies.length > 0 && !error ? '': ""}
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-center mt-4">{error}</p>
        )}

        {/* Loading Skeleton */}
        {(loading || defaultLoading) && (
          <div className="flex gap-4 mt-2 overflow-x-auto pb-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="min-w-[150px] h-[225px] rounded-xl bg-white/10 animate-pulse flex-shrink-0"
              />
            ))}
          </div>
        )}

        {/* Movie Posters */}
        {!loading && !defaultLoading && movies.length > 0 && (
          <div className="flex gap-4 mt-2 overflow-x-auto pb-2">
            {movies.map((movie, i) => (
              <div key={i} className="min-w-[150px] flex-shrink-0 text-center">
                {movie.poster ? (
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-[150px] h-[225px] object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-[150px] h-[225px] rounded-xl bg-white/10 flex items-center justify-center text-white/50 text-sm px-2">
                    🎬 {movie.title}
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