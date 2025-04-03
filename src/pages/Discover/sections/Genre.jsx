import { useState, useEffect } from "react";
import { fetchMusicGenres } from "../../../services/spotifyService";
import { AddOutlined } from "@mui/icons-material";

const Genre = ({ title }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const fetchedGenres = await fetchMusicGenres();
      setGenres(fetchedGenres);
    };
    getGenres();
  }, []);

  return (
    <div className="flex flex-col gap-y-5 my-16">
      <h2 className="font-bold font-poppins text-4xl">
        {title} <span className="text-pink-600">genre</span>
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-full">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-5 bg-black/35 p-4 rounded-xl cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.9)] shadow-xl"
          >
            <img
              src={genre.images?.[0].url}
              alt={genre.name}
              className="w-full h-[20rem] rounded-xl object-cover"
            />
            <h4 className="text-2xl font-medium">{genre.name}</h4>
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

export default Genre;
