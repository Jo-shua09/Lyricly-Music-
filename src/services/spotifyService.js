const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

// Fetch Spotify API Token
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

    if (!response.ok) throw new Error("Failed to fetch token");
    return (await response.json()).access_token;
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
    return null;
  }
};

// Generic Fetch Function for API Calls
const fetchFromSpotify = async (endpoint) => {
  const token = await getSpotifyToken();
  if (!token) return [];

  try {
    const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
};

// Fetch Top Songs
export const fetchTopSongs = async () => {
  const data = await fetchFromSpotify("search?q=hip-hop&type=track&limit=6");
  return (
    data?.tracks?.items?.map(({ id, name, artists, album }) => ({
      id,
      name: name || "Unknown Track",
      artist: artists.map((a) => a.name).join(", ") || "Unknown Artist",
      image: album?.images?.[0]?.url || "",
    })) || []
  );
};

// Fetch New Releases
export const fetchNewReleases = async () => {
  const data = await fetchFromSpotify("browse/new-releases?limit=5");
  return data?.albums?.items || [];
};

// Fetch Trending Songs
export const fetchTrendingSongs = async () => {
  const genres = ["pop", "rock", "hip-hop", "electronic", "r-n-b", "latin"];
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  const offset = Math.floor(Math.random() * 100);

  const data = await fetchFromSpotify(
    `search?q=genre:${randomGenre}&type=track&limit=10&offset=${offset}`
  );

  return (
    data?.tracks?.items?.map(
      ({ id, name, artists, album, preview_url, popularity }) => ({
        id,
        name,
        artist: artists.map((a) => a.name).join(", "),
        image: album?.images?.[0]?.url || "/default-song.jpg",
        preview_url,
        popularity,
      })
    ) || []
  );
};

// Fetch Popular Artists
export const fetchPopularArtists = async () => {
  const data = await fetchFromSpotify("browse/new-releases?limit=50");

  const artistIds = [
    ...new Set(
      data?.albums?.items.flatMap(({ artists }) => artists.map((a) => a.id))
    ),
  ];

  const shuffledArtists = artistIds.sort(() => 0.5 - Math.random()).slice(0, 5);
  if (!shuffledArtists.length) return [];

  const artistData = await fetchFromSpotify(
    `artists?ids=${shuffledArtists.join(",")}`
  );

  return (
    artistData?.artists?.map(({ id, name, images, followers }) => ({
      id,
      name,
      image: images?.[0]?.url || "/default-artist.jpg",
      followers: followers?.total || 0,
    })) || []
  );
};

// Fetch Top Albums
export const fetchTopAlbums = async () => {
  const data = await fetchFromSpotify("browse/new-releases?limit=50");

  return (
    data?.albums?.items
      ?.sort(() => 0.5 - Math.random())
      .slice(0, 5)
      .map(({ id, name, images, artists }) => ({
        id,
        name,
        images,
        artists: artists.map((a) => a.name),
      })) || []
  );
};

// Fetch Mood-Based Playlists
export const fetchMoodPlaylists = async () => {
  const moods = [
    "sad",
    "chill",
    "party",
    "dancing",
    "workout",
    "love",
    "happy",
  ];

  const playlists = await Promise.all(
    moods.map(async (mood) => {
      const data = await fetchFromSpotify(
        `search?q=${mood}&type=playlist&limit=1`
      );
      const playlist = data?.playlists?.items?.[0];

      return playlist
        ? {
            id: playlist.id,
            name: playlist.name,
            image: playlist.images?.[0]?.url || "/default-playlist.jpg",
            description: playlist.description || "No description available",
            tracks: playlist.tracks.total || 0,
          }
        : null;
    })
  );

  return playlists.filter(Boolean);
};

// Fetch Music Genres (FIXED)
export const fetchMusicGenres = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const response = await fetch(
      "https://api.spotify.com/v1/browse/categories?limit=5",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch genres");

    const data = await response.json();

    // FIX: Ensure data exists
    if (!data.categories?.items || data.categories.items.length === 0) {
      console.warn("No genres found from API");
      return [];
    }

    return data.categories.items.map((item) => ({
      name: item.name || "Unknown Genre",
      images: item.icons?.length ? item.icons : [{ url: "/default-genre.jpg" }], // Ensure images exist
    }));
  } catch (error) {
    console.error("Error fetching music genres:", error);
    return [];
  }
};

// REMOVE: Fetching Music Videos (Spotify doesn't provide them)
export const fetchMusicVideos = async () => {
  console.warn("Spotify does not provide music videos.");
  return [];
};
