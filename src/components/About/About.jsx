import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../../assets/banner.png";
import BannerImg2 from "../../assets/banner2.png";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const About = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleGetStarted = () => {
    navigate('/services');
  };

  const handleJoinUs = () => {
    navigate('/about');
  };

  const handleDiscoverMore = () => {
    navigate('/calculations');
  };

  return (
    <div className="py-14 bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-black dark:to-gray-900 duration-300">
      <div className="container">
        <div className="absolute top-4 right-4 z-10">
          {theme === "dark" ? (
            <BiSolidSun
              onClick={() => setTheme("light")}
              className="text-2xl cursor-pointer text-yellow-300 hover:scale-110 transition duration-300"
            />
          ) : (
            <BiSolidMoon
              onClick={() => setTheme("dark")}
              className="text-2xl cursor-pointer text-gray-700 hover:scale-110 transition duration-300"
            />
          )}
        </div>

        {/* First Section - Banner on Left */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt="Gym Equipment"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-lg shadow-primary-dark mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary-light dark:text-primary-dark text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary-light dark:text-primary-dark uppercase tracking-widest">Global Fitness</p>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">About Us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide text-gray-600 dark:text-gray-300">
                At Global Fitness, we believe in creating a community that thrives on health and wellness. Our state-of-the-art facilities are designed to cater to every fitness level, from beginners to seasoned athletes.
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-gray-600 dark:text-gray-300">
                Our experienced trainers provide personalized guidance, ensuring that you achieve your fitness goals effectively and safely.
              </p>
              <button
                onClick={handleGetStarted}
                data-aos="fade-up"
                className="px-6 py-2 rounded-full border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Second Section - Banner on Right */}
        <div className="py-14">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
              <div>
                <div className="space-y-5 sm:p-16 pb-6">
                  <div data-aos="zoom-in" className="flex items-center gap-4">
                    <div className="text-primary-light dark:text-primary-dark text-7xl ">
                      <h1 className="font-bold">02</h1>
                    </div>
                    <div>
                      <p className="text-primary-light dark:text-primary-dark uppercase tracking-widest">Our Mission</p>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">Empowering Lives</h1>
                    </div>
                  </div>
                  <p data-aos="fade-up" className="leading-8 tracking-wide text-gray-600 dark:text-gray-300">
                    Our mission is to empower individuals through fitness. We aim to create an inclusive environment where everyone feels welcome.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="300" className="text-gray-600 dark:text-gray-300">
                    Join us to take part in various classes, workshops, and fitness challenges designed to keep you engaged.
                  </p>
                  <button
                    onClick={handleJoinUs}
                    data-aos="fade-up"
                    className="px-6 py-2 rounded-full border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition duration-300"
                  >
                    Join Us Now
                  </button>
                </div>
              </div>
              <div data-aos="fade-up">
                <img
                  src={BannerImg2}
                  alt="Group Training"
                  className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-lg shadow-primary-dark mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - Banner on Left */}
        <div className="py-14">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
              <div data-aos="fade-up">
                <img
                  src="https://i.pinimg.com/originals/65/7a/e5/657ae537778015683eec6c1fab560ba4.jpg"
                  alt="Personal Training"
                  className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-lg shadow-primary-dark mx-auto"
                />
              </div>
              <div>
                <div className="space-y-5 sm:p-16 pb-6">
                  <div data-aos="zoom-in" className="flex items-center gap-4">
                    <div className="text-primary-light dark:text-primary-dark text-7xl ">
                      <h1 className="font-bold">03</h1>
                    </div>
                    <div>
                      <p className="text-primary-light dark:text-primary-dark uppercase tracking-widest">Why Choose Us</p>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">Unmatched Training Experience</h1>
                    </div>
                  </div>
                  <p data-aos="fade-up" className="leading-8 tracking-wide text-gray-600 dark:text-gray-300">
                    We offer tailored workout plans, nutrition advice, and motivation to keep you on track.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="300" className="text-gray-600 dark:text-gray-300">
                    With access to top-of-the-line equipment and a supportive community, your fitness journey will be rewarding.
                  </p>
                  <button
                    onClick={handleDiscoverMore}
                    data-aos="fade-up"
                    className="px-6 py-2 rounded-full border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition duration-300"
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
