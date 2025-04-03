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
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-[16.5%] md:fixed border-r-2 border-pink-600">
      <div data-aos="fade-up" className="w-full h-full flex flex-col">
        <Link to="/">
          <h2 className="text-6xl cursor-pointer font-poppins section-sidebar !pb-0 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 to-blue-600">
            lyricly
          </h2>
        </Link>

        <div className="w-full flex flex-col">
          <h4 className="normal-case section-sidebar !pb-0 text-xl text-pink-600 font-semibold">
            menus
          </h4>
          <div className="flex flex-col pr-5 sm:text-2xl font-normal gap-y-2 text-white">
            <Link to="/">
              <div
                className={`flex items-center px-[1.5rem] ${
                  location.pathname === "/"
                    ? "bg-pink-600"
                    : "hover:bg-pink-600"
                } rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group`}
              >
                <Home className="!text-[2rem]" />
                <span className="group-hover:tracking-wide group-hover:font-semibold">
                  home
                </span>
              </div>
            </Link>

            <Link to="/discover">
              <div
                className={`flex items-center px-[1.5rem] ${
                  location.pathname === "/discover"
                    ? "bg-pink-600"
                    : "hover:bg-pink-600"
                } rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group`}
              >
                <Explore className="!text-[2rem]" />
                <span className="group-hover:tracking-wide group-hover:font-semibold">
                  discover
                </span>
              </div>
            </Link>

            <Link to="/album">
              <div
                className={`flex items-center px-[1.5rem] ${
                  location.pathname === "/album"
                    ? "bg-pink-600"
                    : "hover:bg-pink-600"
                } rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group`}
              >
                <LibraryMusic className="!text-[2rem]" />
                <span className="group-hover:tracking-wide group-hover:font-semibold">
                  Albums
                </span>
              </div>
            </Link>

            <Link to="/artist">
              <div
                className={`flex items-center px-[1.5rem] ${
                  location.pathname === "/artist"
                    ? "bg-pink-600"
                    : "hover:bg-pink-600"
                } rounded-br-xl rounded-tr-xl cursor-pointer py-3 gap-x-3 group`}
              >
                <Person className="!text-[2rem]" />
                <span className="group-hover:tracking-wide group-hover:font-semibold">
                  artist
                </span>
              </div>
            </Link>
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
