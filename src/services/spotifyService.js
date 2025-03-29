import axios from "axios";

const API_URL = "https://api.spotify.com/v1";

export const getTopSongs = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/me/top/tracks?limit=5`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0]?.name || "Unknown Artist",
      image: track.album?.images[0]?.url || "",
    }));
  } catch (error) {
    console.error("Error fetching top songs:", error);
    return [];
  }
};

export const getNewReleases = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/browse/new-releases?limit=5`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.albums.items.map((album) => ({
      id: album.id,
      name: album.name,
      artist: album.artists[0]?.name || "Various Artists",
      image: album.images[0]?.url || "",
    }));
  } catch (error) {
    console.error("Error fetching new releases:", error);
    return [];
  }
};

export const getTrendingSongs = async (token) => {
  try {
    const response = await axios.get(
      `${API_URL}/browse/featured-playlists?limit=5`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.playlists.items.map((playlist) => ({
      id: playlist.id,
      name: playlist.name,
      artist: "Playlist",
      image: playlist.images[0]?.url || "",
    }));
  } catch (error) {
    console.error("Error fetching trending songs:", error);
    return [];
  }
};
