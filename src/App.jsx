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
import Footer from "./components/Footer.jsx";
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
      <Footer/>
      <ToastContainer />
    </div>
  );
};
export default App;

