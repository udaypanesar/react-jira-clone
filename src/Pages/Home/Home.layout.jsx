import { Outlet } from "react-router";
import Sidebar from "./Sidebar.component";
import Navbar from "./Navbar.component";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100dvh_-_3.5rem)] w-full">
        <Sidebar />
        <div className="w-full max-w-[calc(100vw_-_16rem)]">
        <div className="max-w-9xl h-full mx-auto px-4 sm:px-6 sm:py-4"> 
        <Outlet />
        </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
