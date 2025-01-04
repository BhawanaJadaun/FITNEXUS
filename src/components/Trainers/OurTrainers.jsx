import React, { useState, useEffect } from "react";
import Trainer1 from "../../assets/trainer1.webp";
import Trainer2 from "../../assets/trainer2.png"; // Add more trainers as needed
import Trainer3 from "../../assets/trainer3.png";
import Trainer4 from "../../assets/trainer4.png";
import Trainer5 from "../../assets/trainer5.png";
import Trainer6 from "../../assets/trainer6.png";
import Trainer7 from "../../assets/trainer7.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

// Sample trainers data

  const trainers = [
    {
      id: 1,
      name: "Rajat Deshmuk",
      title: "Body Building and Nutrition",
      experience: "5 years",
      description:
        "A gym trainer with 5 years of experience in bodybuilding and nutrition specializes in creating personalized workout and nutrition plans to help clients build muscle, strength, and overall fitness. With expertise in exercise techniques, recovery strategies, and nutrition, they have successfully guided clients of all levels to achieve their fitness goals.",
      image: Trainer1,
    },
    {
      id: 2,
      name: "Amit Patil",
      title: "Strength Training Expert",
      experience: "7 years",
      description:
        "A seasoned strength training expert with over 7 years of professional experience, dedicated to empowering clients to reach their peak physical performance. Specializing in customized strength and conditioning programs, I have successfully guided individuals of all fitness levels toward achieving their health and athletic goals. My expertise lies in tailoring science-backed strategies to optimize strength, endurance, and overall physical well-being, ensuring lasting results and transformative progress.",
      image: Trainer2,
    },
    {
      id: 3,
      name: "Priya Sharma",
      title: "Yoga and Wellness Coach",
      experience: "4 years",
      description:
        "Specializing in yoga and wellness, Priya has 4 years of experience in guiding clients towards improved flexibility, mental calmness, and overall well-being.",
      image: Trainer3,
    },
    {
      id: 4,
      name: "Vikram Singh",
      title: "CrossFit Coach",
      experience: "6 years",
      description:
        "Vikram is a certified CrossFit coach with 6 years of experience in high-intensity functional training, helping clients achieve endurance, strength, and agility.",
      image: Trainer4, // Add this image to your assets
    },
    {
      id: 5,
      name: "Anjali Mehta",
      title: "Pilates Instructor",
      experience: "8 years",
      description:
        "With 8 years of expertise in Pilates, Anjali specializes in core strengthening, flexibility improvement, and post-injury recovery training.",
      image: Trainer5, // Add this image to your assets
    },
    {
      id: 6,
      name: "Rohan Gupta",
      title: "Cardio Specialist",
      experience: "3 years",
      description:
       "Rohan is a dedicated fitness professional with over 3 years of expertise in cardiovascular health and endurance training. He specializes in crafting highly effective, personalized programs aimed at improving heart health, enhancing stamina, and achieving sustainable weight loss. With a passion for promoting overall well-being, Rohan has helped clients of all backgrounds adopt healthier lifestyles, achieve their fitness goals, and significantly boost their cardiovascular performance.",
      image: Trainer6, // Add this image to your assets
    },
    {
      id: 7,
      name: "Sneha Kulkarni",
      title: "Zumba Instructor",
      experience: "9 years",
      description:
       "Sneha is a dynamic and passionate Zumba instructor with over 9 years of experience, known for infusing energy, excitement, and joy into every fitness routine. Her engaging and high-energy classes are designed to not only make workouts enjoyable but also to keep clients motivated and on track toward achieving their fitness goals. With her expertise in blending rhythm, movement, and cardio, Sneha has empowered countless individuals to embrace a healthier, more active lifestyle while having fun every step of the way.",
      image: Trainer7, // Add this image to your assets
    },
  ];

  

// HorizontalCard component
export function HorizontalCard({ trainer }) {
  return (
    <Card className="w-full max-w-[1000px] flex-row mb-4 border-2 border-secondary rounded-lg bg-primary">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/3 shrink-0 rounded-l-lg"
      >
        <img
          src={trainer.image}
          className="h-full w-full object-cover rounded-l-lg bg-third"
          alt={trainer.name}
        />
      </CardHeader>
      <CardBody className="p-4 m-8">
        <Typography
          variant="h6"
          color="gray"
          className="mb-2 uppercase text-text-secondary"
        >
          {trainer.name}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-text-primary"
        >
          {trainer.title}
        </Typography>
        <Typography color="gray" className="mb-4 font-normal text-text-default">
          {trainer.description}
        </Typography>
        <a href="#" className="inline-block">
          <Button
            variant="text"
            className="flex items-center gap-2 bg-secondary hover:bg-default p-3 text-white rounded-full"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

// OurTrainers page component with auto-slider
const OurTrainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-8 text-center text-text-primary">Our Trainers</h1>
      <div className="flex justify-center">
        <HorizontalCard trainer={trainers[currentIndex]} />
      </div>
    </div>
  );
};

export default OurTrainers;

// import React from 'react';
// import Trainer1 from "../../assets/trainer1.webp";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

// // HorizontalCard component
// export function HorizontalCard() {
//   return (
//     <Card className="w-full max-w-[1000px] flex-row mb-4 border-2 border-secondary rounded-lg bg-primary">
//       <CardHeader
//         shadow={false}
//         floated={false}
//         className="m-0 w-1/3 shrink-0 rounded-l-lg"
//       >
//         <img
//           src={Trainer1}
//           className="h-full w-full object-cover rounded-l-lg bg-third"
//         />
//       </CardHeader>
//       <CardBody className="p-4 m-8">
//         <Typography variant="h6" color="gray" className="mb-2 uppercase text-text-secondary">
//         Rajat Deshmuk
//         </Typography>
//         <Typography variant="h4" color="blue-gray" className="mb-2 text-text-primary">
//         Body Building and Nutrition
//         </Typography>
//         <Typography color="gray" className="mb-4 font-normal text-text-default">
//         A gym trainer with <span className = "bg-secondary rounded-full text-white p-1 text-bold">5 years of experience</span> in bodybuilding and nutrition specializes in creating personalized workout and nutrition plans to help clients build muscle, strength, and overall fitness. With expertise in exercise techniques, recovery strategies, and nutrition, they have successfully guided clients of all levels to achieve their fitness goals
//         </Typography>
//         <a href="#" className="inline-block">
//           <Button variant="text" className="flex items-center gap-2 bg-secondary hover:bg-default p-3 text-white rounded-full">
//             Learn More
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//               className="h-4 w-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//               />
//             </svg>
//           </Button>
//         </a>
//       </CardBody>
//     </Card>
//   );
// }

// // OurTrainers page component
// const OurTrainers = () => {
//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-8">Our Trainer</h1>
//       <div className="flex justify-center">
//         <HorizontalCard />
//       </div>
//     </div>
//   );
// }

// export default OurTrainers;
