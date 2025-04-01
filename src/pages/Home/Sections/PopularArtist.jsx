import React, { useState, useEffect } from "react";
import { fetchPopularArtists } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const PopularArtist = ({ title }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const artistData = await fetchPopularArtists();
        if (artistData.length > 0) {
          setArtists(artistData);
        }
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };
    getArtists();
  }, []);

  return (
    <div className="flex items-start flex-col gap-y-5 my-16">
      <h2 className="font-bold font-poppins text-4xl">
        {title} <span className="text-pink-600">Artists</span>
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-5 h-full justify-center items-center w-full">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col justify-center gap-y-3 w-full cursor-pointer h-full py-5 rounded-xl items-center hover:bg-black/35 hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)]"
          >
            <img
              src={artist.image || "/default-artist.jpg"}
              alt={artist.name}
              className="w-1/2 h-full shadow-[1px_1px_10px_rgba(0,0,0,0.9)] rounded-full object-cover"
            />
            <h4 className="text-2xl font-medium">{artist.name}</h4>
            <p className="text-xl font-light font-poppins">
              {artist.followers ? artist.followers.toLocaleString() : "N/A"}{" "}
              followers
            </p>
          </div>
        ))}
        <div className="mt-4 flex-col gap-y-2 flex justify-center">
          <div className="bg-black/35 w-fit h-fit p-5 rounded-full cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)]">
            <AddOutlined className="!text-[3rem]" />
          </div>
          <p className="text-2xl font-semibold font-poppins ">view all</p>
        </div>
      </div>
    </div>
  );
};

export default PopularArtist;
