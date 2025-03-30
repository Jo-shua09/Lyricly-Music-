import React from "react";
import TopSongs from "./topSongs";
import NewReleases from "./newReleases";
import TrendingSongs from "./trendingSongs";
import PopularArtist from "./PopularArtist";
import TopAlbums from "./TopAlbums";
import PlayList from "./PlayLists";

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
