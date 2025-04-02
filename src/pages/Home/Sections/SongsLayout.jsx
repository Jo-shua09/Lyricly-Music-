import React from "react";
import TopSongs from "./topSongs";
import TrendingSongs from "./trendingSongs";
import NewReleases from "../../../components/NewReleases";
import PopularArtist from "../../../components/PopularArtist";
import TopAlbums from "../../../components/TopAlbums";
import PlayList from "../../../components/PlayLists";

const SongsLayout = () => {
  return (
    <div className="">
      <TopSongs title="top new" />
      <NewReleases title="new release" />
      <TrendingSongs title="trending" />
      <PopularArtist title="popular" />
      <TopAlbums title="top" />
      <PlayList title="mood " />
    </div>
  );
};

export default SongsLayout;
