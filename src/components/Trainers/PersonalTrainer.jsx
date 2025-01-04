import React from "react";
import { Button } from "@/components/ui/button";
import gym_trainer from "../../assets/PersonalTrainer.webp";

const PersonalTrainer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 m-8 lg:m-20">
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-2xl lg:text-4xl font-bold text-text-primary">
          Our Personal Trainers: Shape Your Body and Mind
        </h1>
        <p className="mt-4 text-text-secondary text-xl inline-block font-semibold">
          Our expert personal trainers will help you achieve your fitness goals through:
        </p>
        <ul className="mt-4 list-disc list-inside text-text-secondary text-lg cursor-pointer text-start">
          <li>Staying motivated and inspired</li>
          <li>Setting weekly goals and tracking your progress</li>
          <li>Teaching aerobic, flexibility, or resistance exercises</li>
          <li>Providing expert guidance and personalized plans</li>
        </ul>
        <Button className="bg-btn-secondary flex justify-center items-center mt-8 mx-auto lg:mx-0 p-4 text-white hover:bg-btn-primary cursor-pointer text-lg">
          About Us
        </Button>
      </div>
      <div className="mb-10 mr-28 flex items-center justify-center bg-primary rounded-full p-6">
  <img
    src={gym_trainer}
    alt="A personal trainer guiding a client"
    className="rounded-full max-w-sm h-auto"
  />
</div>

    </div>
  );
};

export default PersonalTrainer;
