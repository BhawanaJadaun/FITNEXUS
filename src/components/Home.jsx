import React, { useState } from "react";
import gym_home from "../assets/home1.webp";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import HomeRoutes from "./HomeRoutes.jsx";
import video from "../assets/gym.mp4";
import border from "../assets/border.jpg";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:p-14 p-6 bg-primary gap-8">
        {/* Left Section: Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-text-primary mt-2">
            Train Harder! <br />
            GET STRONGER!
          </h1>
          <p className="mt-4 text-text-secondary text-[1rem] sm:text-[1.2rem] font-bold leading-relaxed">
            Physical Fitness is not only one of the most important aspects of
            life, but also the foundation for unlocking your full potential and
            embracing every challenge with confidence and energy.
          </p>
          {/* Buttons Section */}
          <div className="mt-6 flex gap-6 items-center justify-center md:justify-start">
            <Button className="px-6 py-3 text-[14px] sm:text-[15px] bg-btn-secondary hover:bg-btn-primary text-white">
              Join Now
            </Button>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePlayPause}
                className="p-2 rounded-full bg-gradient-to-r from-black to-blue-700 text-white hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <AiFillPlayCircle size={30} />
              </button>
              <span className="text-text-primary text-lg sm:text-xl font-bold">
                Play Video
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={gym_home}
            alt="Welcome to FITNEXUS Gym"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover ml-20 floating"
          />
        </div>
      </div>

      {/* Border Section */}
      <div
        className="w-full h-32 bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${border})`,
          margin: 0, 
          padding: 0,
          backgroundPosition: "center",
          backgroundSize: "cover", 
          zIndex: -1,
        }}
      >
        <marquee
          behavior="scroll"
          direction="right" 
          scrollamount="10"
          className="text-2xl sm:text-4xl font-extrabold text-white absolute inset-0 flex items-center justify-center z-10"
        >
          Push Your Limits, Achieve Your Goals! | State-of-the-Art Equipment
          Available 24/7! | Join Our Expert-Led Training Sessions Today! |
          Limited Time Offer: 50% Off Annual Memberships!
        </marquee>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <video
              src={video}
              controls
              autoPlay
              className="rounded-lg shadow-lg w-full max-w-xl"
            />
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 m-4 p-2 bg-secondary text-white rounded-full shadow-lg hover:bg-default focus:ring-2 focus:ring-offset-2 focus:ring-white z-50"
            >
              <AiOutlineClose size={30} />
            </button>
          </div>
        </div>
      )}

      <HomeRoutes />
    </>
  );
};

export default Home;
