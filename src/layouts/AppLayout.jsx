import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
// import Sidebar from "@/components/Sidebar";
// import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[200rem]  bg-black/90 text-white w-full h-full sm:flex">
      <div className="w-full h-full sm:flex-1">
        <div className="hidden sm:flex">
          <Sidebar />
        </div>
      </div>
      <div className="section-page max-w-[140rem] w-full h-full sm:flex-[5]">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
