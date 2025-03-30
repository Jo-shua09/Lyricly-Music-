import { useState, useEffect } from "react";
import { fetchPopularArtists } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const PopularArtist = ({ title, artistIds }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const artistData = await Promise.all(
          artistIds.map(async (id) => await fetchPopularArtists(id))
        );
        setArtists(artistData.filter((artist) => artist !== null));
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };
    getArtists();
  }, [artistIds]);

  return (
    <div className="flex items-start flex-col gap-y-5 my-10">
      <h2 className="font-bold font-poppins text-4xl">
        {title} <span className="text-pink-600">Artists</span>
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-5 justify-between w-full">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col gap-y-5 bg-black/35 w-full p-4 rounded-xl hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)] shadow-xl"
          >
            <img
              src={artist.images?.[0]?.url || "/default-artist.jpg"}
              alt={artist.name}
              className="w-full rounded-xl object-cover"
            />
            <h4 className="text-2xl font-medium">{artist.name}</h4>
            <p className="text-xl font-light font-poppins">
              Followers: {artist.followers?.total.toLocaleString()}
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

export default PopularArtist;
