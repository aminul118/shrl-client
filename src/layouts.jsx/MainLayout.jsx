import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MainLayout = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Navbar />
      <div className="min-h-[calc(100vh-424px)] px-2 lg:px-0 container mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
