import {
  FacebookOutlined,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      className="mt-36 mb-10 h-full flex flex-wrap md:flex-nowrap items-start justify-between gap-x-5 gap-y-10"
    >
      <div className="w-full md:flex-[2]">
        <h3 className="text-3xl mb-10 font-poppins font-semibold">about</h3>
        <p className="text-2xl font-normal normal-case pr-5">
          Lyricly is a website that has been created for over{" "}
          <span className="text-pink-600 normal-case">5 year’s</span> now and it
          is one of the most famous music player website’s in the world. in this
          website you can listen and download songs for free. also of you want
          no limitation you can buy our{" "}
          <span className="text-blue-600 normal-case">premium pass.</span>
        </p>
      </div>

      <div className="text-center w-full md:flex-1">
        <h3 className="text-3xl mb-10 font-poppins font-semibold underline underline-offset-8">
          Lyricly
        </h3>
        <ul className="text-2xl flex flex-col gap-y-5 items-center justify-center font-medium">
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            songs
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            radio
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            podcast
          </li>
        </ul>
      </div>

      <div className="text-center w-full md:flex-1">
        <h3 className="text-3xl mb-10 font-poppins font-semibold underline underline-offset-8">
          access
        </h3>
        <ul className="text-2xl flex flex-col gap-y-5 items-center justify-center font-medium">
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            explore
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            artists
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            playlists
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            albums
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            trending
          </li>
        </ul>
      </div>

      <div className="text-center w-full md:flex-1">
        <h3 className="text-3xl mb-10 font-poppins font-semibold underline underline-offset-8">
          contact
        </h3>
        <ul className="text-2xl flex flex-col gap-y-5 items-center justify-center font-medium">
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            about
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            policy
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            social media
          </li>
          <li className=" cursor-pointer hover:text-pink-600 list-none">
            support
          </li>
        </ul>
      </div>

      <div className="text-center w-full md:flex-1">
        <h2 className="text-6xl font-poppins section-sidebar !pb-0 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 to-blue-600">
          lyricly
        </h2>
        <div className="flex gap-x-5 justify-center items-center mt-10">
          <FacebookOutlined className="cursor-pointer hover:text-pink-600 !text-5xl" />
          <Instagram className="cursor-pointer hover:text-pink-600 !text-5xl" />
          <Twitter className="cursor-pointer hover:text-pink-600 !text-5xl" />
          <Phone className="cursor-pointer hover:text-pink-600 !text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
