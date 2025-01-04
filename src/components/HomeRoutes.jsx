import React from 'react'
import Features from './Features.jsx';
import PersonalTrainer from "./Trainers/PersonalTrainer.jsx";
import OurActivity from "./Trainers/OurActivity.jsx";
import OurTrainer from "./Trainers/OurTrainers.jsx";
import GymPackages from "./Trainers/GymPackages.jsx";
import OurMember from "./Trainers/OurMember.jsx";
const HomeRoutes = () => {
  return (
    <div>
  <Features/>
  <PersonalTrainer/>
  <OurActivity/>
  <OurTrainer/>
  <GymPackages/>
  <OurMember/>
    </div>
  )
}

export default HomeRoutes