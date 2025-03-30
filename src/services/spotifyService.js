const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

const getSpotifyToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch token");
    return data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
    return null;
  }
};

// Fetch Top Songs (Global Top 50)
export const fetchTopSongs = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const response = await fetch(
      "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF", // Global Top 50
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await response.json();
    return data.tracks.items.map((item) => item.track);
  } catch (error) {
    console.error("Error fetching top songs:", error);
    return [];
  }
};

// Fetch New Releases
export const fetchNewReleases = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=5",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await response.json();
    return data.albums.items;
  } catch (error) {
    console.error("Error fetching new releases:", error);
    return [];
  }
};

// Fetch Trending Songs (Featured Playlists)
export const fetchTrendingSongs = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await response.json();
    return data.playlists.items;
  } catch (error) {
    console.error("Error fetching trending songs:", error);
    return [];
  }
};

// Fetch Popular Artists
export const fetchPopularArtists = async (artistId) => {
  try {
    const token = await getSpotifyToken();
    if (!token) return null;

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return await response.json();
  } catch (error) {
    console.error(`Error fetching artist ${artistId}:`, error);
    return null;
  }
};

// Fetch Top Albums
export const fetchTopAlbums = async () => {
  return fetchNewReleases(); // Reuse existing API call
};

// Fetch Playlists
export const fetchPlaylists = async (category = "pop") => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${category}/playlists?limit=5`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await response.json();
    return data?.playlists?.items || [];
  } catch (error) {
    console.error(`Error fetching playlists for ${category}:`, error);
    return [];
  }
};
