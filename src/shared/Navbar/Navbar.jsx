import { Link, NavLink } from "react-router";
import logo from "../../assets/logos/logo.png";

const Navbar = () => {
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
      <li>
        <NavLink to={`/events`}>Events</NavLink>
      </li>
      <li>
        <NavLink to={`/events`}>Career</NavLink>
      </li>
    </>
  );
  return (
    <header className="sticky top-0 z-50 bg-base-100">
      <div className="navbar container mx-auto ">
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
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-warning">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;