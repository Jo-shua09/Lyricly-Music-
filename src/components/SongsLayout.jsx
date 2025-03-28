import { AddOutlined } from "@mui/icons-material";
import React from "react";

const SongsLayout = () => {
  return (
    <div className="flex items-center">
      <div className="w-full h-full flex justify-between gap-x-10">
        <div className="flex flex-col gap-y-5 bg-black/35 p-4 rounded-xl">
          <img
            src="hero.jpg"
            alt="song image"
            className="w-[20rem] rounded-xl h-[20rem] object-cover"
          />
          <h4 className="text-3xl font-semibold font-poppins normal-case">
            name
          </h4>
          <p className="text-2xl font-medium normal-case">description</p>
        </div>
      </div>

      <div className="">
        <div className="bg-black/35 p-8 rounded-full cursor-pointer hover:scale-95">
          <AddOutlined className="!text-3xl" />
        </div>
        <p className="text-2xl font-medium mt-1 normal-case">View all</p>
      </div>
    </div>
  );
};

export default SongsLayout;
