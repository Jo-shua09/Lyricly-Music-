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

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Failed to fetch token");
    }

    const data = await response.json();
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
      `https://api.spotify.com/v1/search?q=hip-hop&type=track&limit=6`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch top songs");
    }

    const data = await response.json();
    return (data?.tracks?.items || []).map((track) => ({
      id: track?.id || "",
      name: track?.name || "Unknown Track",
      artist: track?.artists?.map((a) => a.name).join(", ") || "Unknown Artist",
      image: track?.album?.images?.[0]?.url || "",
    }));
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
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch new releases");
    }

    const data = await response.json();
    return data?.albums?.items || [];
  } catch (error) {
    console.error("Error fetching new releases:", error);
    return [];
  }
};

//Fetch Trending songs
export const fetchTrendingSongs = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) {
      console.error("❌ No Spotify token found");
      return [];
    }

    // Array of popular genres to randomly select from
    const genres = ["pop", "rock", "hip-hop", "electronic", "r-n-b", "latin"];
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=genre:${randomGenre}&type=track&limit=10&offset=${Math.floor(
        Math.random() * 100
      )}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("🚨 Error fetching songs:", errorText);
      throw new Error("Failed to fetch songs");
    }

    const data = await response.json();
    return (data?.tracks?.items || []).map((track) => ({
      id: track?.id || "",
      name: track?.name || "Unknown Track",
      artist:
        track?.artists?.map((artist) => artist.name).join(", ") ||
        "Unknown Artist",
      image: track?.album?.images?.[0]?.url || "/default-song.jpg",
      preview_url: track?.preview_url || null,
      popularity: track?.popularity || 0,
    }));
  } catch (error) {
    console.error("❌ Error fetching songs:", error);
    return [];
  }
};

// Fetch popuar artist
export const fetchPopularArtists = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch artists");
    }

    const data = await response.json();
    const albums = data.albums.items;

    // Extract unique artist IDs
    const artistIds = [
      ...new Set(albums.flatMap((album) => album.artists.map((a) => a.id))),
    ];

    // Shuffle and pick 5 random artists
    const shuffledArtists = artistIds
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    if (shuffledArtists.length === 0) return [];

    // Fetch artist details
    const artistResponse = await fetch(
      `https://api.spotify.com/v1/artists?ids=${shuffledArtists.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!artistResponse.ok) {
      throw new Error("Failed to fetch artist details");
    }

    const artistData = await artistResponse.json();

    return artistData?.artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      image: artist.images?.[0]?.url || "/default-artist.jpg",
      followers: artist.followers?.total || 0,
    }));
  } catch (error) {
    console.error("Error fetching popular artists:", error);
    return [];
  }
};

// Fetch Top Albums
export const fetchTopAlbums = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch new releases");
    }

    const data = await response.json();
    const albums = data?.albums?.items || [];

    // Shuffle albums to get random 5
    const randomAlbums = albums.sort(() => 0.5 - Math.random()).slice(0, 5);

    return randomAlbums.map((album) => ({
      id: album?.id || "",
      name: album?.name || "Unknown Album",
      images: album?.images || [],
      artists: album?.artists?.map((artist) => artist.name) || [
        "Unknown Artist",
      ],
    }));
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
};

//Fetch playlist
export const fetchMoodPlaylists = async () => {
  try {
    const token = await getSpotifyToken();
    if (!token) return [];

    const moods = [
      "sad",
      "chill",
      "playing",
      "dancing",
      "workout",
      "love",
      "happy",
    ];
    const moodPlaylists = [];

    for (const mood of moods) {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${mood}&type=playlist&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) continue; // Skip if no playlist found

      const data = await response.json();
      const playlist = data?.playlists?.items?.[0];

      if (playlist) {
        moodPlaylists.push({
          id: playlist.id,
          name: playlist.name,
          image: playlist.images?.[0]?.url || "/default-playlist.jpg",
          description: playlist.description || "No description available",
          tracks: playlist.tracks.total || 0,
        });
      }
    }

    return moodPlaylists;
  } catch (error) {
    console.error("Error fetching mood playlists:", error);
    return [];
  }
};
