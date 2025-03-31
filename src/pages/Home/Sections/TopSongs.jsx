import { useState, useEffect } from "react";
import { fetchTopSongs } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const TopSongs = ({ title }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const topSongs = await fetchTopSongs();
      setSongs(topSongs);
    };
    getSongs();
  }, []);

  return (
    <div className="flex items-start flex-col gap-y-5 my-10">
      <h2 className="font-bold font-poppins text-4xl">
        {title} <span className="text-pink-600">songs</span>
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-5 justify-between w-full">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-5 bg-black/35 w-full p-4 rounded-xl hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)] shadow-xl"
          >
            {song.image ? (
              <img
                src={song.image}
                alt={song.name}
                className="w-full h-[30rem] rounded-xl object-cover"
              />
            ) : (
              <div className="w-full h-40 bg-gray-700 rounded-xl flex items-center justify-center">
                No Image
              </div>
            )}
            <h4 className="text-2xl font-medium">{song.name}</h4>
            <p className="text-2xl font-semibold font-poppins">{song.artist}</p>
          </div>
        ))}
        <div className="bg-black/35 w-fit h-fit my-auto p-5 rounded-full cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)]">
          <AddOutlined className="!text-[3rem]" />
        </div>
      </div>
    </div>
  );
};

export default TopSongs;
