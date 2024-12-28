import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import logo from "../assets/logo.png";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 bg-[#bae6fd] text-black">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="Logo" className="w-20 cursor-pointer ml-8" />
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-semibold text-[17px]">
        <NavLink to="/" className="py-1 cursor-pointer" activeClassName="text-blue-600">
          Home
        </NavLink>
        <NavLink to="/about" className="py-1 cursor-pointer" activeClassName="text-blue-600">
          About
        </NavLink>
        <NavLink to="/services" className="py-1 cursor-pointer" activeClassName="text-blue-600">
          Services
        </NavLink>
        <NavLink to="/schedule" className="py-1 cursor-pointer" activeClassName="text-blue-600">
          Schedule
        </NavLink>
        <NavLink to="/blog" className="py-1 cursor-pointer" activeClassName="text-blue-600">
          Blog
        </NavLink>
        <NavLink to="/contact" className="py-1 cursor-pointer" activeClassName="text-blue-600">
          Contact
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <NavLink to="/register">
          <button className="py-1 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Register
          </button>
        </NavLink>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={menu_icon}
          alt="Menu"
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full h-screen" : "hidden"
          } md:hidden top-0 right-0 bg-white z-20`}
        >
          <div className="flex items-center justify-between px-5 py-6 border-b">
            <img className="w-36" src={logo} alt="Logo" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={cross_icon}
              alt="Close"
            />
          </div>
          <ul className="flex flex-col items-center gap-4 mt-6 text-lg font-medium">
            <NavLink
              to="/"
              className="px-4 py-2 rounded cursor-pointer"
              activeClassName="text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/all-doctors"
              className="px-4 py-2 rounded cursor-pointer"
              activeClassName="text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              All Doctors
            </NavLink>
            <NavLink
              to="/about"
              className="px-4 py-2 rounded cursor-pointer"
              activeClassName="text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="px-4 py-2 rounded cursor-pointer"
              activeClassName="text-blue-600"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
