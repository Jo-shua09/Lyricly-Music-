import React, { useEffect, useState } from "react";
import { fetchTrendingSongs } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const TrendingSongs = ({ title }) => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const trendingSongs = await fetchTrendingSongs();
        setSongs(trendingSongs);
      } catch (err) {
        setError("Failed to load trending songs");
        console.error("Error fetching trending songs:", err);
      } finally {
        setLoading(false);
      }
    };

    getTrending();
  }, []);

  if (loading) {
    return <div className="text-white/80">Loading trending songs...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex items-start flex-col gap-y-5 my-10">
      <h2 className="font-bold font-poppins text-4xl">
        {title} <span className="text-pink-600">songs</span>
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-5 justify-between w-full">
        {Array.isArray(songs) &&
          songs.map((song) =>
            song && song.id ? (
              <div
                key={song.id}
                className="flex flex-col gap-y-3 bg-black/35 w-full p-4 rounded-xl hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)] shadow-xl"
              >
                {/* Song Image */}
                {song.image && (
                  <img
                    src={song.image}
                    alt={song.name || "Song"}
                    className="w-full h-48 rounded-xl object-cover"
                  />
                )}

                {/* Song Name */}
                <h4 className="text-2xl font-medium truncate">
                  {song.name || "Untitled Song"}
                </h4>

                {/* Artist Name */}
                <p className="text-lg text-gray-400">
                  {song.artist || "Unknown Artist"}
                </p>

                {/* Audio Preview (if available) */}
                {song.preview_url && (
                  <audio controls className="w-full">
                    <source src={song.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ) : null
          )}

        {/* Add More Button */}
        <div className="bg-black/35 w-fit h-fit my-auto p-5 rounded-full cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)]">
          <AddOutlined className="!text-[3rem]" />
        </div>
      </div>
    </div>
  );
};

export default TrendingSongs;
