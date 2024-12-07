import { Link } from "react-router";
import logo from "../../assets/logos/logo-white.png";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = (
    <>
      <Link>Home</Link>

      <Link>Services</Link>

      <Link>Team</Link>

      <Link>Contact Us</Link>
    </>
  );
  return (
    <div className="bg-base-200 mt-6  lg:mt-20">
      <footer className="py-8 container mx-auto ">
        <div className="footer  text-base-content p-10 flex  justify-between">
          <nav className="text-base">{footerLinks}</nav>
          <nav>
            <img className="w-36" src={logo} alt="" />
          </nav>
          <nav>
            <h6 className="footer-title">Contact</h6>
            <div className="text-base">
              <p className="flex  gap-2 ">
                <FaLocationDot /> 278 West Monipur, <br /> Level-4, 60 Feet
                Road, <br /> Mirpur-2, Dhaka-1216.
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> +880171185594{" "}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope />
                info@shrl.com
              </p>
              <a
                href="https://www.facebook.com/smarthealthcareandresearchltd"
                className="flex items-center gap-2"
              >
                <FaFacebook /> Facebook
              </a>
            </div>
          </nav>
        </div>

        <aside>
          <p className="text-center text-sm">
            Copyright © {new Date().getFullYear()} - All right reserved by Smart
            Healthcare and Research Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
