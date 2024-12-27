import { useState } from "react";
import logo from "../assets/logo.png";
import drop_icon from "../assets/dropdown_icon.svg";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 bg-[#bae6fd] text-black">
      <img
        src={logo}
        alt="Logo"
        className="w-20 cursor-pointer ml-8"
      />
      <ul className="hidden md:flex items-start gap-8 from-neutral-950 font-semibold text-[17px]">
        <li className="py-1 cursor-pointer">Home</li>
        <li className="py-1 cursor-pointer">About</li>
        <li className="py-1 cursor-pointer">Services</li>
        <li className="py-1 cursor-pointer">Schedule</li>
        <li className="py-1 cursor-pointer">Blog</li>
        <li className="py-1 cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center gap-4">
       <button> Register</button>
       
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={menu_icon}
          alt="Menu"
        />
        {/* Mobile menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={logo} alt="Logo" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={cross_icon}
              alt="Close"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <li onClick={() => setShowMenu(false)} className="px-4 py-2 rounded inline-block cursor-pointer">Home</li>
            <li onClick={() => setShowMenu(false)} className="px-4 py-2 rounded inline-block cursor-pointer">All Doctors</li>
            <li onClick={() => setShowMenu(false)} className="px-4 py-2 rounded inline-block cursor-pointer">About</li>
            <li onClick={() => setShowMenu(false)} className="px-4 py-2 rounded inline-block cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




// import { useState } from "react";
// import logo from "../assets/logo.png";
// import { NavLink } from "react-router-dom";
// import drop_icon from "../assets/dropdown_icon.svg";
// import menu_icon from "../assets/menu_icon.svg";
// import cross_icon from "../assets/cross_icon.png";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//       <img
//         src={logo}
//         alt="Logo"
//         className="w-44 cursor-pointer"
//       />
//       <ul className="hidden md:flex items-start gap-5 font-medium">
//         <NavLink to="/">
//           <li className="py-1">Home</li>
//         </NavLink>
//         <NavLink to="/doctors">
//           <li className="py-1">All Doctors</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="py-1">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="py-1">Contact</li>
//         </NavLink>
//       </ul>
//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => console.log("Navigate to login")}
//           className="bg-indigo-600 text-white px-8 py-3 rounded-full font-light hidden md:block"
//         >
//           Create account
//         </button>
//         <img
//           onClick={() => setShowMenu(true)}
//           className="w-6 md:hidden"
//           src={menu_icon}
//           alt="Menu"
//         />
//         {/* Mobile menu */}
//         <div
//           className={`${
//             showMenu ? "fixed w-full" : "h-0 w-0"
//           } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
//         >
//           <div className="flex items-center justify-between px-5 py-6">
//             <img className="w-36" src={logo} alt="Logo" />
//             <img
//               className="w-7"
//               onClick={() => setShowMenu(false)}
//               src={cross_icon}
//               alt="Close"
//             />
//           </div>
//           <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
//             <NavLink onClick={() => setShowMenu(false)} to="/">
//               <p className="px-4 py-2 rounded inline-block">Home</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/doctors">
//               <p className="px-4 py-2 rounded inline-block">All Doctors</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/about">
//               <p className="px-4 py-2 rounded inline-block">About</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/contact">
//               <p className="px-4 py-2 rounded inline-block">Contact</p>
//             </NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
