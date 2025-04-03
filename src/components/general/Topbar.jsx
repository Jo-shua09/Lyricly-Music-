import React from "react";
import { Search } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        className="flex justify-between place-content-end w-full gap-x-10 gap-y-10 m-auto text-center md:flex-nowrap flex-wrap items-center"
      >
        <div className="relative flex-1">
          <input
            placeholder="Search for music, artist..."
            type="text"
            className="text-xl w-full bg-[#333] focus:border shadow-lg h-[4rem] rounded-xl pl-3"
          />
          <Search className="!text-[2.2rem] absolute top-1/4 right-5" />
        </div>

        <div className="flex-1 place-content-center hidden md:flex w-full">
          <ul className="flex items-center justify-around text-white text-2xl font-semibold gap-x-10">
            <li className="cursor-pointer hover:text-pink-600 hover:underline underline-offset-4">
              about us
            </li>
            <li className="cursor-pointer hover:text-pink-600 hover:underline underline-offset-4">
              contact
            </li>
            <li className="cursor-pointer hover:text-pink-600 hover:underline underline-offset-4">
              premium
            </li>
          </ul>
        </div>

        <div className="flex-1 w-full flex justify-between gap-x-5">
          <button className="text-2xl font-semibold w-full h-[4rem] rounded-xl hover:scale-95 uppercase border border-pink-600 text-pink-600">
            login
          </button>
          <button className="text-2xl font-semibold w-full h-[4rem] rounded-xl uppercase border bg-pink-600 text-white hover:scale-95 border-pink-600">
            sign up
          </button>
        </div>
      </div>

      <div className="flex-1 place-content-center md:hidden flex w-full mt-7">
        <ul className="flex items-center justify-around text-white text-2xl font-semibold gap-x-10">
          <li className="cursor-pointer hover:text-pink-600 hover:underline underline-offset-4">
            about us
          </li>
          <li className="cursor-pointer hover:text-pink-600 hover:underline underline-offset-4">
            contact
          </li>
          <li className="cursor-pointer hover:text-pink-600 hover:underline underline-offset-4">
            premium
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
