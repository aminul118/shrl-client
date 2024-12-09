import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css";

const MainLayout = () => {
  const { darkMode } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ once: true });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Navbar />
      <div className="min-h-[calc(100vh-464px)]  lg:px-0 ">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
