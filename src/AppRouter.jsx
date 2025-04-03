import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Album from "./pages/Album/Album";
import Artist from "./pages/Artist/Artist";
import AppLayout from "./layouts/AppLayout";
import ScrollToTop from "./components/ScrollToTop";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/album" element={<Album />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/:id" element={<Artist />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
