import { Link, NavLink } from "react-router"; // Make sure to import from 'react-router-dom'
import logo from "../../assets/logos/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, handleSignOut, darkMode, handleDarkModeToggle } =
    useContext(AuthContext);

  //! User Links

  const navLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/services`}>Services</NavLink>
      </li>
      <li>
        <NavLink to={`/team`}>Team</NavLink>
      </li>
      {/* Drop Down Menu */}
      <li>
        <details>
          <summary>Events</summary>
          <ul className="p-2">
            <li>
              <NavLink to={`/upcoming-events`}>Upcoming</NavLink>
            </li>

            <li>
              <NavLink to={`/events`}>Events</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={`/contact`}>Contact</NavLink>
      </li>
    </>
  );

  //! Admin Links

  const adminLinks = (
    <>
      <li>
        <NavLink to={`/add-upcoming-events`}>Add Upcoming Event</NavLink>
      </li>
      <li>
        <NavLink to={`/scrolling-text`}>Add Scrolling Text</NavLink>
      </li>
      <li>
        <NavLink to={`/add-events`}>Add Events</NavLink>
      </li>

      <li>
        <button onClick={handleSignOut} className="btn btn-warning">
          Sign Out
        </button>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={`/`} className="w-16">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <button onClick={handleDarkModeToggle} className="text-xl mr-3">
            {darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://i.ibb.co.com/pdvkBZp/fatema-cv-photo.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3"
              >
                {adminLinks}
              </ul>
            </div>
          ) : (
            <NavLink to={`/login`} className="btn btn-warning">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
