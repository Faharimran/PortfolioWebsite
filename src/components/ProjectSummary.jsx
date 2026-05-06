import GlassCard from "./card/GlassCard";
import { useState } from "react";
import TitleText from "./titleText/TitleText"

const ProjectSummary = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSummary("");
    setError("");

    try {
      const res = await fetch("http://localhost:8001/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setSummary(data.summary);
    } catch (err) {
      setError("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <GlassCard className="w-full p-6">

        <div className="font-bold w-full flex mb-5">
          <TitleText title="Project Summary" />
        </div>

        <form className="w-full mx-auto" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/user/repo"
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
              disabled={loading}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                bg-white text-black
                px-5 py-2 rounded-full
                font-medium hover:bg-gray-200 transition
                disabled:opacity-50
              "
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>

        {error && (
          <p className="mt-4 text-red-400 text-sm">{error}</p>
        )}

        {summary && (
          <div className="mt-6 text-white/90 leading-relaxed whitespace-pre-wrap text-sm">
            {summary}
          </div>
        )}

      </GlassCard>
    </div>
  );
};

export default ProjectSummary;