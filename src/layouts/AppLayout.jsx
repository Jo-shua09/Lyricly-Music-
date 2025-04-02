import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[150rem] bg-black/90 m-auto w-full h-full flex text-white">
      <div className="w-full h-full flex-1 hidden md:flex">
        <Sidebar />
      </div>
      <div className="w-full h-full flex-[5] section-page">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
