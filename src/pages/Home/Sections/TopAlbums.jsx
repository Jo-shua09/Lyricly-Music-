import { useState, useEffect } from "react";
import { fetchTopAlbums } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const TopAlbums = ({ title }) => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const topAlbums = await fetchTopAlbums();
        setAlbums(topAlbums);
      } catch (err) {
        setError("Failed to load albums");
        console.error(err);
      }
    };
    getAlbums();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex items-start flex-col gap-y-5 my-10">
      <h2 className="font-bold font-poppins text-4xl">
        {title} <span className="text-pink-600">album</span>
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-5 justify-between w-full">
        {albums.map((album) => (
          <div
            key={album.id}
            className="flex flex-col gap-y-5 bg-black/35 w-full p-4 rounded-xl hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)] shadow-xl"
          >
            <img
              src={album.images?.[0]?.url}
              alt={album.name}
              className="w-full h-48 rounded-xl object-cover"
            />
            <h4 className="text-2xl font-medium truncate">{album.name}</h4>
            <p className="text-xl font-semibold font-poppins truncate">
              {album.artists?.[0]?.name}
            </p>
          </div>
        ))}
        <div className="bg-black/35 w-fit h-fit my-auto p-5 rounded-full cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)]">
          <AddOutlined className="!text-[3rem]" />
        </div>
      </div>
    </div>
  );
};

export default TopAlbums;
