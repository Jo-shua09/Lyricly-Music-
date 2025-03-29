import { createAuth } from "react-oauth2-code-pkce";

const authConfig = {
  clientId: "bab5e543797e42c6b2e2bba9ff022e27",
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
  redirectUri: window.location.origin + "/callback",
  scope: "user-read-private user-read-email user-top-read",
  onRefreshTokenExpire: (event) => window.location.reload(),
};

export const spotifyAuth = createAuth(authConfig);

export const getToken = async () => {
  try {
    const token = await spotifyAuth.getAccessToken();
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};
