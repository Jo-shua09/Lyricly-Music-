const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

// SETTINGS FOR API DATA COLLECTION
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

// SETTINGS FOR API ENDPOINT
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

// FETCH TOP SONGS FROM API
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

export const fetchNewReleases = async () => {
  const data = await fetchFromSpotify("browse/new-releases?limit=5");
  return data?.albums?.items || [];
};

// FETCH TRENDING SONGS FROM API
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

// FETCH POPULAR ARTIST FROM API
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

// FETCH TOP ALBUMS FROM API
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

// FETCH PLAYLIST BASED ON MODD FROM API
export const fetchMoodPlaylists = async () => {
  const moods = [
    "sad",
    "chill",
    "playing",
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

// FETCH DIFFERENT GENRES OF MUSIC FROM API
export const fetchMusicGenres = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    // First get available genres
    const genresResponse = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!genresResponse.ok) {
      throw new Error("Failed to fetch genres");
    }

    const genresData = await genresResponse.json();
    const selectedGenres = genresData.genres.slice(0, 5); // Get first 5 genres

    // For each genre, get a playlist to get its image
    const genresWithImages = await Promise.all(
      selectedGenres.map(async (genreName) => {
        const playlistResponse = await fetch(
          `https://api.spotify.com/v1/search?q=genre:${genreName}&type=playlist&limit=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!playlistResponse.ok) {
          return {
            name: genreName,
            images: [{ url: "/default-genre.jpg" }],
            artists: [{ name: "Various Artists" }],
          };
        }

        const playlistData = await playlistResponse.json();
        const playlist = playlistData.playlists.items[0];

        return {
          name: genreName,
          images: playlist?.images || [{ url: "/default-genre.jpg" }],
          artists: [
            { name: playlist?.owner?.display_name || "Various Artists" },
          ],
        };
      })
    );

    return genresWithImages;
  } catch (error) {
    console.error("Error fetching music genres:", error);
    return [];
  }
};

// FETCH DIFFERENT MUSIC VIDEOS FROM API
