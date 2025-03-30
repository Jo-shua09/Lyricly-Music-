import { useState, useEffect } from "react";
import { fetchNewReleases } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const NewReleases = ({ title }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const newReleases = await fetchNewReleases();
      setAlbums(newReleases);
    };
    getAlbums();
  }, []);

  return (
    <div className="flex items-start flex-col gap-y-5 my-10">
      <h2 className="font-bold font-poppins text-4xl">
        {title} {""}
        <span className="text-pink-600">songs</span>
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-5 justify-between w-full">
        {albums.map((album, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-5 bg-black/35 w-full p-4 rounded-xl hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)] shadow-xl"
          >
            <img
              src={album.images[0].url}
              alt={album.name}
              className="w-full rounded-xl object-cover"
            />

            <h4 className="text-2xl font-medium">{album.name}</h4>
            <p className="text-2xl font-semibold font-poppins">
              {album.artists[0].name}
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

export default NewReleases;
