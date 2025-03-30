import React from "react";
import { Search } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full rounded-[3rem] section-page bg-hero bg-cover brightness-75 bg-center">
        <div className="flex justify-between place-content-end w-full gap-x-10 gap-y-10 m-auto text-center md:flex-nowrap flex-wrap items-center">
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

        <div className="w-full h-full mt-72 mb-28">
          <div className="md:w-2/5 w-4/5">
            <h1 className="uppercase font-poppins font-semibold text-5xl">
              all the{" "}
              <span className="text-pink-600 uppercase text-5xl">
                best songs
              </span>{" "}
              <br />
              in one place
            </h1>
            <p className="text-2xl mt-11 font-medium text-gray-300 normal-case">
              On our website, you can access an amazing collection of popular
              and new songs. Stream your favorite tracks in high quality and
              enjoy without interruptions. Whatever your taste in music, we have
              it all for you!
            </p>
            <div className=" mt-10 flex justify-between gap-x-5">
              <button className="text-2xl font-semibold w-full h-[4rem] rounded-xl uppercase border bg-pink-600 text-white hover:scale-95 border-pink-600">
                discover now
              </button>
              <button className="text-2xl font-semibold w-full h-[4rem] rounded-xl hover:scale-95 uppercase border border-blue-600 text-blue-600">
                create playliist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
