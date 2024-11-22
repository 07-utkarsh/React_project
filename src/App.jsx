import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './custom.css';


// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About"; 
import NewAbout from "./components/About/NewAbout"; 
import Services from "./components/Services/Services";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Calculations from "./components/Calculations/Calculations"; // Import the Calculations component
import JoinPage from "./components/JoinPage/JoinPage";
import Service from "./components/Offers/Service";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><About /><Contact /><Service/><AppStoreBanner /><Testimonial /><Footer /></>} />
          <Route path="/about" element={<NewAbout />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculations" element={<Calculations />} />
          <Route path="/join" element={<JoinPage />} /> {/* New route for Calculations */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
