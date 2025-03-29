import { useEffect, useState } from "react";
import {
  getTopSongs,
  getNewReleases,
  getTrendingSongs,
} from "../services/spotifyService";
import SongSection from "../pages/Home/sections/Songs";

function SpotifyLayout({ token }) {
  const [topSongs, setTopSongs] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [trendingSongs, setTrendingSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      getTopSongs(token)
        .then(setTopSongs)
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch top songs.");
        });
      getNewReleases(token)
        .then(setNewReleases)
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch new releases.");
        });
      getTrendingSongs(token)
        .then(setTrendingSongs)
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch trending songs.");
        });
    }
  }, [token]);

  return (
    <div className="p-6 bg-gradient-to-b from-black/80 to-gray-900 rounded-2xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Discover Music</h1>
      {error && <p className="text-red-500 mb-4 text-lg">{error}</p>}

      <div className="space-y-12">
        <SongSection title="Top Songs" songs={topSongs} />
        <SongSection title="New Releases" songs={newReleases} />
        <SongSection title="Trending Songs" songs={trendingSongs} />
      </div>
    </div>
  );
}

export default SpotifyLayout;
