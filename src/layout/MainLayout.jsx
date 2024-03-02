import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
