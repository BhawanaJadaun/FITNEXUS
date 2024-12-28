import React from "react";
import gym_home from "../assets/gym 1.jpg";
import { AiFillPlayCircle } from "react-icons/ai"; // Awesome Font Video Icon

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#bae6fd]">
      {/* Left Section: Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h3 className="text-lg font-semibold text-gray-800">Welcome to FITNEXUS</h3>
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mt-2">
          Train Harder! <br />
          GET STRONGER!
        </h1>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.2rem",
            fontWeight: "bold",
            lineHeight: "1.6",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
          className="mt-4 text-gray-700"
        >
          Physical Fitness is not only one of the most important aspects of life, but also the foundation for unlocking your full potential and embracing every challenge with confidence and energy.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Join Now
          </button>
          <button className="bg-indigo-800 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 flex items-center transition">
            <AiFillPlayCircle className="text-2xl mr-2" />
            Play Video
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={gym_home}
          alt="Gym Home"
          className="rounded-lg shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
