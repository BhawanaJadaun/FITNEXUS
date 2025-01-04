import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faHeartbeat,
  faUserFriends,
  faTrophy,
  faChartLine,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";

const Features = () => {
  const cards = [
    { icon: faDumbbell, title: 'Customized Training', text: 'Tailored workout and diet plans just for you', desc: 'Customized Training ensures that your fitness journey is uniquely tailored to your individual needs and goals' },
    { icon: faHeartbeat, title: 'Health Monitoring', text: 'Track your health metrics with ease', desc: 'Health Monitoring is a vital component of maintaining and improving overall well-being.' },
    { icon: faUserFriends, title: 'Community Support', text: 'Join a supportive fitness community', desc: 'Community Support in fitness refers to the encouragement, motivation, and sense of belonging that individuals experience when they join a group or network of like-minded people.' },
    { icon: faTrophy, title: 'Achieve Goals', text: 'Set and achieve your fitness milestones', desc: 'Achieve Goals in the context of fitness means setting clear, actionable objectives and working consistently towards reaching them.' },
    { icon: faChartLine, title: 'Progress Tracking', text: 'Monitor your progress effectively', desc: 'Progress Tracking helps monitor your fitness journey by measuring key metrics like weight, strength, and endurance.' },
    { icon: faRunning, title: 'Dynamic Workouts', text: 'Explore a variety of workout routines', desc: 'Dynamic Workouts refer to a variety of exercise routines that keep your body constantly challenged by introducing new movements, exercises, and intensity levels.' },
  ];

  return (
    
    <div className="w-screen bg-primary">
     <div className = "bg-default h-full"></div>
      <div className="p-8  mx-auto max-w-7xl">
        {/* Section Title */}
        <h1 className="text-center text-4xl font-bold  text-text-primary m-5">What you will get.</h1>
        <h3 className="text-center text-lg text-text-secondary mb-6">
          Make Your Workout easier and get perfect results
        </h3>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-full max-w-sm mx-auto h-60 rounded-3xl cursor-pointer bg-third shadow-lg transition-transform transform hover:scale-105 group"
            >
              {/* Hover Effect Backgrounds */}
              <div className="z-10 absolute w-full h-full peer"></div>
              <div className="absolute group-hover:-top-20 group-hover:-left-16 group-hover:w-[140%] group-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-default transition-all duration-500"></div>

              {/* Description Text */}
              <div className="absolute group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full group-hover:rounded-b-none group-hover:items-center group-hover:justify-center group-hover:flex bg-default text-white overflow-clip transition-all duration-500 flex items-center justify-center -bottom-32 -right-16 w-36 h-44 rounded-full">
                <p className="hidden group-hover:block text-center px-3 py-5 justify-start">{card.desc}</p>
              </div>

              {/* Icon and Title */}
              <div className="w-full h-full flex flex-col items-center justify-center uppercase text-center">
                <FontAwesomeIcon icon={card.icon} size="2x" className="text-text-primary mb-2" />
                <h3 className="text-xl font-bold mb-2 text-text-secondary">{card.title}</h3>
                <p className="text-sm text-text-secondary px-4">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Button className="bg-btn-secondary flex justify-center items-center mt-8 mx-auto p-6 px-6 text-white hover:bg-btn-primary">
          See All Features
        </Button>
      </div>
    </div>
  );
};

export default Features;






     