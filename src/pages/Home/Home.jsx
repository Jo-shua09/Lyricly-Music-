import React, { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import SpotifyLayout from "../../layouts/SongsLayout";
import { getToken } from "../../auth/SpotifyAuth";

const Home = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      const accessToken = await getToken();
      setToken(accessToken);
    };
    
    initializeAuth();
  }, []);

  return (
    <div className="section-page">
      <Hero />
      {token && <SpotifyLayout token={token} />}
    </div>
  );
};

export default Home;
