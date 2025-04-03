import React from "react";
import Topbar from "../../components/general/Topbar";
import NewReleases from "../../components/NewReleases";
import PlayLists from "../../components/PlayLists";
import TopAlbums from "../../components/TopAlbums";
import PopularArtist from "../../components/PopularArtist";
import MusicVideo from "./sections/MusicVideo";
import Genre from "./sections/Genre";

const Discover = () => {
  return (
    <div>
      <div className="">
        <Topbar />
        <Genre title="music" />
        <PlayLists title="mood " />
        <PopularArtist title="popular" />
        <MusicVideo title="music" />
        <NewReleases title="new release" />
        <TopAlbums title="top" />
      </div>
    </div>
  );
};

export default Discover;
