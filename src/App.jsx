import React from "react";
import{Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./Pages/about/About.jsx";
import Services from "./Pages/services/Services.jsx";
import Schedule from "./Pages/schedule/Schedule.jsx";
import Blog from "./Pages/blog/Blog.jsx";
import Contact from "./Pages/contact/Contact.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
export default App;

// import React from 'react'
// import { Button } from "@/components/ui/button"

// import './App.css'

// function App() {
 

//   return (
//     <>
//     <div className="bg-primary text-text-primary p-4">
//   This is a primary section with primary text color.
// </div>

// <button className="bg-btn-primary text-white px-4 py-2 rounded">
//   Primary Button
// </button>
// <Button variant="outline" className="bg-btn-primary text-white hover:bg-default">Button</Button>

// <button className="bg-btn-secondary text-white px-4 py-2 rounded">
//   Secondary Button
// </button>


        
//     </>
//   )
// }

// export default App
