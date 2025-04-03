import React, { useEffect, useState } from "react";
import { fetchTrendingSongs } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const TrendingSongs = ({ title }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const trendingSongs = await fetchTrendingSongs();
        setSongs(trendingSongs);
      } catch (err) {
        console.error("Error fetching trending songs:", err);
      }
    };

    getTrending();
  }, []);

  return (
    <div className="flex items-start flex-col gap-y-5 my-16">
      <h2 className="font-bold font-poppins text-4xl">
        {title} <span className="text-pink-600">songs</span>
      </h2>
      <div
        data-aos="flip-down"
        data-aos-delay="200"
        className="w-full overflow-x-auto"
      >
        <table className="min-w-full bg-black/35 rounded-xl">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-6 py-3 text-left text-3xl sm:text-2xl  text-white">
                Image
              </th>
              <th className="px-6 py-3 text-left text-3xl sm:text-2xl text-white">
                Name
              </th>
              <th className="px-6 py-3 text-left text-3xl sm:text-2xl text-white">
                Artist
              </th>
              <th className="px-6 py-3 text-left text-3xl sm:text-2xl text-white">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(songs) &&
              songs.map((song) =>
                song && song.id ? (
                  <tr
                    data-aos="fade-left"
                    data-aos-delay="400"
                    key={song.id}
                    className="border-b cursor-pointer border-gray-700 hover:bg-black/50"
                  >
                    <td className="px-6 py-4">
                      {song.image && (
                        <img
                          src={song.image}
                          alt={song.name || "Song"}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                    </td>
                    <td className="px-6 py-4 text-2xl text-white">
                      {song.name || "Untitled Song"}
                    </td>
                    <td className="px-6 py-4 text-2xl text-gray-400">
                      {song.artist || "Unknown Artist"}
                    </td>
                    <td className="px-6 py-4 text-2xl text-gray-400">
                      {song.duration || "0:00"}
                    </td>
                  </tr>
                ) : null
              )}
          </tbody>
        </table>

        <div className="mt-4 flex-col gap-y-2 flex justify-end">
          <div className="bg-black/35 w-fit h-fit p-5 rounded-full cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)]">
            <AddOutlined className="!text-[3rem]" />
          </div>
          <p className="text-2xl font-semibold font-poppins ">view all</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingSongs;
