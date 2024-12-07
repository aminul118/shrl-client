import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-424px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
