import React, { useState } from "react";
import Member1 from "../../assets/Member1.avif";
import Member2 from "../../assets/Member2.jpg";
import Member3 from "../../assets/Member3.jpg";
import Member4 from "../../assets/Member4.jpg";
import Member5 from "../../assets/Member5.webp";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const OurMember = () => {
  const members = [
    {
      img: Member1,
      name: "Arthur James",
      position: "Marketing Manager",
      feedback:
        "I became a member of this club last year. The process from signup to setting appointment times has been easy and efficient. I workout 3 times a week; it has become an incredible habit. I heartily recommend the club.",
    },
    {
      img: Member2,
      name: "Sophia Taylor",
      position: "Fitness Trainer",
      feedback:
        "Joining this club has transformed my lifestyle. The trainers and facilities are amazing. The supportive environment has kept me motivated every step of the way.",
    },
    {
      img: Member3,
      name: "Ethan Miller",
      position: "Software Engineer",
      feedback:
        "I love the variety of workout programs offered. The flexibility to book sessions fits perfectly into my busy schedule. Highly recommended for professionals!",
    },
    {
      img: Member4,
      name: "Olivia Smith",
      position: "Entrepreneur",
      feedback:
        "The atmosphere here is fantastic. It’s not just a gym; it’s a community. Every session energizes me and keeps me on track with my goals.",
    },
    {
      img: Member5,
      name: "Liam Johnson",
      position: "Architect",
      feedback:
        "The club offers excellent facilities and personalized programs. I’ve made tremendous progress since joining, and I’m excited for what’s ahead.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-primary flex flex-col items-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-text-primary">What Our Member Said</h1>
      <div className="relative w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
        {/* Image Section */}
        <img
          src={members[currentIndex].img}
          alt={members[currentIndex].name}
          className="w-[460px] rounded-md object-cover"
        />
        {/* Text Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">{members[currentIndex].name}</h2>
          <span className="text-lg text-text-secondary">
            {members[currentIndex].position}
          </span>
          <p className="text-text-secondary text-black">{members[currentIndex].feedback}</p>
          {/* Navigation Buttons */}
        <div className=" flex gap-4 mt-10">
          <button
            onClick={handlePrev}
            className=" text-default  rounded-full  flex items-center justify-center hover:text-black"
          >
            <FaCircleChevronLeft size = {25}/>
          </button>
          <button
            onClick={handleNext}
            className="text-default  rounded-full  flex items-center justify-center hover:text-black"
          >
            <FaCircleChevronRight size = {25}/>
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurMember;


// import React, { useState } from "react";
// import Member1 from "../../assets/Member1.avif";
// import Member2 from "../../assets/Member2.jpg";
// import Member3 from "../../assets/Member3.jpg";
// import Member4 from "../../assets/Member4.jpg";
// import Member5 from "../../assets/Member5.webp";

// const OurMember = () => {
//   const members = [
//     {
//       img: Member1,
//       name: "Arthur James",
//       position: "Marketing Manager",
//       feedback:
//         "I became a member of this club last year. The process from signup to setting appointment times has been easy and efficient. I workout 3 times a week; it has become an incredible habit. I heartily recommend the club.",
//     },
//     {
//       img: Member2,
//       name: "Sophia Taylor",
//       position: "Fitness Trainer",
//       feedback:
//         "Joining this club has transformed my lifestyle. The trainers and facilities are amazing. The supportive environment has kept me motivated every step of the way.",
//     },
//     {
//       img: Member3,
//       name: "Ethan Miller",
//       position: "Software Engineer",
//       feedback:
//         "I love the variety of workout programs offered. The flexibility to book sessions fits perfectly into my busy schedule. Highly recommended for professionals!",
//     },
//     {
//       img: Member4,
//       name: "Olivia Smith",
//       position: "Entrepreneur",
//       feedback:
//         "The atmosphere here is fantastic. It’s not just a gym; it’s a community. Every session energizes me and keeps me on track with my goals.",
//     },
//     {
//       img: Member5,
//       name: "Liam Johnson",
//       position: "Architect",
//       feedback:
//         "The club offers excellent facilities and personalized programs. I’ve made tremendous progress since joining, and I’m excited for what’s ahead.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? members.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="bg-primary flex flex-col items-center p-6 space-y-6">
//       <h1 className="text-2xl font-bold text-white">What Our Customers Say</h1>
//       <div className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
//         <img
//           src={members[currentIndex].img}
//           alt={members[currentIndex].name}
//           className="w-32 h-32 rounded-full object-cover"
//         />
//         <h2 className="text-xl font-semibold">{members[currentIndex].name}</h2>
//         <span className="text-sm text-gray-500">
//           {members[currentIndex].position}
//         </span>
//         <p className="text-gray-700">{members[currentIndex].feedback}</p>
//         <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
//           <button
//             onClick={handlePrev}
//             className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
//           >
//             &larr;
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
//           >
//             &rarr;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurMember;
