import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import logo from "../assets/logo.png";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-primary text-black">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="Logo" className="w-24 cursor-pointer" />
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-semibold text-text-primary text-lg">
        <NavLink to="/" className="hover:text-blue-600">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-600">
          About
        </NavLink>
        <NavLink to="/services" className="hover:text-blue-600">
          Services
        </NavLink>
        <NavLink to="/schedule" className="hover:text-blue-600">
          Schedule
        </NavLink>
        <NavLink to="/blog" className="hover:text-blue-600">
          Blog
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-600">
          Contact
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-6">
        <NavLink to="/register">
          <Button className="py-2 px-6 bg-btn-default hover:bg-btn-secondary text-white rounded-lg text-base">
            Register
          </Button>
        </NavLink>
      </div>

      {/* Mobile Menu Icon */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-8 md:hidden cursor-pointer"
        src={menu_icon}
        alt="Menu"
      />

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center pt-8">
          <div className="flex items-center justify-between w-full px-8 pb-4 border-b">
            <img className="w-24" src={logo} alt="Logo" />
            <img
              className="w-8 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={cross_icon}
              alt="Close"
            />
          </div>
          <ul className="flex flex-col items-center gap-6 mt-8 text-lg font-medium">
            <NavLink
              to="/"
              className="hover:text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/schedule"
              className="hover:text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              Schedule
            </NavLink>
            <NavLink
              to="/blog"
              className="hover:text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
            <NavLink to="/register" onClick={() => setShowMenu(false)}>
              <Button className="py-2 px-6 bg-btn-default hover:bg-btn-secondary text-white rounded-lg text-base">
                Register
              </Button>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
