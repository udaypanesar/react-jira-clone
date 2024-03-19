import { Outlet } from "react-router";
import Sidebar from "./Sidebar.component";
import Navbar from "./Navbar.component";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default HomePage;
