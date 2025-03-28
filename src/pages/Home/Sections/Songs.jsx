import React from "react";
import SongsLayout from "../../../components/SongsLayout";

const Songs = () => {
  return (
    <div className="w-full h-full my-14">
      <div className="flex flex-col gap-y-10">
        <h2 className="text-4xl font-semibold font-poppins">
          weekly top <span className="text-pink-600">songs</span>
        </h2>

        <div className="">
          <SongsLayout />
        </div>
      </div>
    </div>
  );
};

export default Songs;
