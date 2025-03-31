import React from "react";
import {
  AddAlarm,
  Explore,
  Favorite,
  Home,
  LibraryMusic,
  Logout,
  Person,
  PlaylistAdd,
  PlaylistAddCheckCircle,
  QueueMusic,
  Settings,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="h-screen w-full border-r-2 sticky border-pink-600">
      <div className="w-full h-full flex flex-col">
        <h2 className="text-6xl font-poppins section-sidebar !pb-0 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 to-blue-600">
          lyricly
        </h2>

        <div className="w-full flex flex-col">
          <h4 className="normal-case section-sidebar !pb-0 text-xl text-pink-600 font-semibold">
            menuss
          </h4>
          <div className="flex flex-col pr-5 sm:text-2xl font-normal  text-white">
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <Home className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                home
              </span>
            </div>
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <Explore className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                discover
              </span>
            </div>
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <LibraryMusic className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                Albums
              </span>
            </div>
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <Person className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                artist
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h4 className="normal-case section-sidebar !pb-0 text-xl text-pink-600 font-semibold">
            library
          </h4>
          <div className="flex flex-col pr-5 sm:text-2xl font-normal  text-white">
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <AddAlarm className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                recently added
              </span>
            </div>
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <PlaylistAddCheckCircle className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                most played
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h4 className="normal-case section-sidebar !pb-0 text-xl text-pink-600 font-semibold">
            playlist and favorite
          </h4>
          <div className="flex flex-col pr-5 sm:text-2xl font-normal  text-white">
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <Favorite className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                favorite
              </span>
            </div>
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <QueueMusic className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                playlist
              </span>
            </div>
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <PlaylistAdd className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                add playlist
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h4 className="normal-case section-sidebar !pb-0 text-xl text-pink-600 font-semibold">
            general
          </h4>
          <div className="flex flex-col pr-5 sm:text-2xl font-normal  text-white">
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <Settings className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                settings
              </span>
            </div>
            <div className="flex items-center px-[1.5rem] hover:bg-pink-600 rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group">
              <Logout className="!text-[2rem]" />
              <span className="group-hover:tracking-wide group-hover:font-semibold">
                logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
