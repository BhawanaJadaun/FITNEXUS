import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-secondary p-5">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-secondary text-center md:justify-between">
        <img src={logo} alt="logo" className="w-20" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as={Link}
              to="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              About
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/services"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Services
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/schedule"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Schedule
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/schedule"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Schedule
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/schedule"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Schedule
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/blog"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Blog
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white-500"
            >
              Contact
            </Typography>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 h-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
        >
          <FaTwitter />
        </Link>
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 h-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
        >
          <FaGithub />
        </Link>
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 h-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
        >
          <FaYoutube />
        </Link>
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 h-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
        >
          <FaLinkedin />
        </Link>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        Made with <span className="text-red-500 text-xl">&hearts;</span> by Bhawana Jadaun
      </Typography>
    </footer>
  );
}

export default FooterWithLogo;
