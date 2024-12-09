import { Link } from "react-router";
import logo from "../../assets/logos/logo-white.png";
import logo2 from "../../assets/logos/logo.png";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Footer = () => {
  const { darkMode } = useContext(AuthContext);
  const footerLinks = (
    <>
      <Link className="hover:text-primary">Home</Link>

      <Link className="hover:text-primary">Services</Link>

      <Link className="hover:text-primary">Team</Link>

      <Link className="hover:text-primary">Contact Us</Link>
    </>
  );

  return (
    <div className="bg-base-200">
      <footer className="md:py-8 container mx-auto">
        <div className="footer text-base-content p-10 flex flex-wrap justify-between gap-8">
          <nav className="text-base w-full sm:w-auto">{footerLinks}</nav>

          <nav className="w-full sm:w-auto  sm:justify-start">
            <img
              className="w-36 h-36 object-cover"
              src={darkMode ? logo : logo2}
              alt="Logo"
            />
          </nav>

          <nav className="w-full sm:w-auto">
            <h6 className="footer-title text-lg mb-4">Contact</h6>
            <div className="text-base">
              <a
                href="https://www.google.com/maps/dir//smart+healthcare+and+research+limited/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3755c10012ad289d:0x6497707bf07e8dc0?sa=X&ved=1t:3061&ictx=111"
                target="_blank"
              >
                <p className="flex gap-2">
                  <FaLocationDot /> 278 West Monipur, <br /> Level-4, 60 Feet
                  Road, <br /> Mirpur-2, Dhaka-1216.
                </p>
              </a>

              <p className="flex items-center gap-2">
                <FaPhone /> +880171185594
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope />
                info@shrl.com
              </p>
              <a
                href="https://www.facebook.com/smarthealthcareandresearchltd"
                className="flex items-center gap-2 mt-2"
              >
                <FaFacebook /> Facebook
              </a>
            </div>
          </nav>
        </div>

        <aside>
          <p className="text-center text-sm mt-4">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Smart Healthcare and Research Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
