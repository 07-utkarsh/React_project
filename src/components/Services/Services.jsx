
import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

// Dark Mode toggle functionality
const DarkMode = () => {
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

  // Return the icons for the toggle button; you can use your existing button
  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </>
  );
};
const serviceData = [
  {
    id: 1,
    title: "Stress Training",
    description: "Reduce your stress levels with our specially designed stress training programs.",
    img: "https://2xnutrition.com/upload/blog/okBJE_mn.jpg",
    duration: "12 months",
    price: 499,
    benefits: [
      "Improves mental well-being",
      "Enhances focus and productivity",
      "Reduces anxiety and depression",
      "Increases resilience to stress"
    ],
  },
  {
    id: 2,
    title: "Strength Training",
    description: "Build strength and endurance with our personalized training programs.",
    img: "https://th.bing.com/th/id/OIP.ZVlIw-lVx0A8P2j29MAXKwHaE8?rs=1&pid=ImgDetMain",
    duration: "6 months",
    price: 299,
    benefits: [
      "Increases muscle strength",
      "Enhances athletic performance",
      "Boosts metabolism",
      "Improves bone health"
    ],
  },
  {
    id: 3,
    title: "Yoga Classes",
    description: "Experience relaxation and flexibility with our expert-led yoga classes.",
    img: "https://myhealthyoga.com/wp-content/uploads/2020/03/M2A2731.jpg",
    duration: "3 months",
    price: 199,
    benefits: [
      "Improves flexibility",
      "Reduces stress",
      "Enhances mental clarity",
      "Promotes better sleep"
    ],
  },
  {
    id: 4,
    title: "Nutrition Coaching",
    description: "Get personalized nutrition advice to complement your fitness journey.",
    img: "https://wellspring.edu/wp-content/uploads/2020/09/fitness-nutrition-hero-opt.jpg",
    duration: "6 months",
    price: 249,
    benefits: [
      "Helps achieve weight goals",
      "Improves overall health",
      "Enhances athletic performance",
      "Provides meal planning support"
    ],
  },
  {
    id: 5,
    title: "Group Fitness",
    description: "Join our fun and engaging group fitness classes for all levels.",
    img: "https://th.bing.com/th/id/OIP.VKi56SFV606rwcOT6Q19PwAAAA?rs=1&pid=ImgDetMain",
    duration: "12 months",
    price: 350,
    benefits: [
      "Boosts motivation",
      "Provides a sense of community",
      "Enhances accountability",
      "Increases workout variety"
    ],
  },
  {
    id: 6,
    title: "Cardio Kickboxing",
    description: "Get fit with high-energy cardio kickboxing sessions.",
    img: "https://th.bing.com/th/id/OIP.xAC6M_-P3D4XnlNA7B60QgHaD5?rs=1&pid=ImgDetMain",
    duration: "4 months",
    price: 279,
    benefits: [
      "Burns calories quickly",
      "Improves cardiovascular health",
      "Builds stamina",
      "Enhances coordination"
    ],
  },
  {
    id: 7,
    title: "Pilates Classes",
    description: "Strengthen your core and improve flexibility with Pilates.",
    img: "https://th.bing.com/th/id/OIP.lp4HEEC8t6CCY3sqg330UgHaFo?rs=1&pid=ImgDetMain",
    duration: "5 months",
    price: 199,
    benefits: [
      "Increases core strength",
      "Improves posture",
      "Enhances flexibility",
      "Reduces back pain"
    ],
  },
  {
    id: 8,
    title: "High-Intensity Interval Training (HIIT)",
    description: "Get maximum results in minimum time with HIIT workouts.",
    img: "https://th.bing.com/th/id/OIP.aefoQ3ZzOjS2XBGHEA5wpgHaE8?rs=1&pid=ImgDetMain",
    duration: "8 months",
    price: 299,
    benefits: [
      "Burns fat efficiently",
      "Boosts metabolism",
      "Increases cardiovascular fitness",
      "Can be done anywhere"
    ],
  },
  {
    id: 9,
    title: "Zumba Dance Classes",
    description: "Enjoy dancing while burning calories with Zumba.",
    img: "https://justdance.ie/wp-content/uploads/2020/11/women-sportswear-zumba-dance-class-min-scaled.jpg",
    duration: "6 months",
    price: 249,
    benefits: [
      "Makes exercise fun",
      "Improves coordination",
      "Increases energy levels",
      "Burns calories"
    ],
  },
  {
    id: 10,
    title: "Personal Training",
    description: "Get one-on-one training tailored to your fitness needs.",
    img: "https://www.healthstatus.com/wp-content/uploads/2021/03/exercise-gym-trainer-weights.jpg",
    duration: "12 months",
    price: 599,
    benefits: [
      "Customized workouts",
      "Accountability",
      "Expert guidance",
      "Rapid results"
    ],
  },
  {
    id: 11,
    title: "Body Pump",
    description: "A barbell workout that strengthens your entire body.",
    img: "https://www.carnbrealeisurecentre.co.uk/images/xupA2uSpaHeS/0242432001438760837.jpg",
    duration: "10 months",
    price: 329,
    benefits: [
      "Improves muscle tone",
      "Enhances strength",
      "Increases metabolism",
      "Great for all fitness levels"
    ],
  },
  {
    id: 12,
    title: "Spin Classes",
    description: "Get your heart racing with energetic spin classes.",
    img: "https://th.bing.com/th/id/OIP.k1knF5BrG8J4LCZXvCNodAHaHa?rs=1&pid=ImgDetMain",
    duration: "3 months",
    price: 249,
    benefits: [
      "Burns calories",
      "Improves cardiovascular fitness",
      "Builds leg strength",
      "Great music to keep you motivated"
    ],
  },
  {
    id: 13,
    title: "Kickboxing",
    description: "Learn self-defense techniques while getting fit.",
    img: "https://th.bing.com/th/id/OIP.xVWzS0RfvLmdHhWVbxwPKAAAAA?rs=1&pid=ImgDetMain",
    duration: "4 months",
    price: 199,
    benefits: [
      "Enhances self-defense skills",
      "Increases strength and stamina",
      "Boosts confidence",
      "Fun and energetic workout"
    ],
  },
  {
    id: 14,
    title: "Boot Camp Classes",
    description: "Challenge yourself with our boot camp sessions.",
    img: "https://chuzefitness.com/wp-content/uploads/DSC_1034_preview-1.jpeg",
    duration: "6 months",
    price: 279,
    benefits: [
      "Full-body workout",
      "Builds endurance",
      "Creates a supportive community",
      "Boosts motivation"
    ],
  },
  {
    id: 15,
    title: "Functional Training",
    description: "Train your body for everyday activities.",
    img: "https://th.bing.com/th/id/OIP.Guykjv1ShAAHSRojwoxvEgAAAA?rs=1&pid=ImgDetMain",
    duration: "5 months",
    price: 199,
    benefits: [
      "Improves balance and coordination",
      "Enhances overall fitness",
      "Reduces risk of injury",
      "Adaptable for all fitness levels"
    ],
  },
  {
    id: 16,
    title: "Meditation Classes",
    description: "Join guided meditation sessions for mental clarity and relaxation.",
    img: "https://th.bing.com/th/id/R.1aa3d306174f25436d8acd30f320933a?rik=j6V%2fz88PpIUrgg&riu=http%3a%2f%2fwww.param-yoga.com%2fwp-content%2fuploads%2fMeditation.jpg&ehk=KH4Fl3oBCyjhB5WaSGQJ%2fGjBbFkejbb6TjHzEh9fnBw%3d&risl=&pid=ImgRaw&r=0",
    duration: "2 months",
    price: 99,
    benefits: [
      "Reduces stress and anxiety",
      "Improves concentration",
      "Enhances emotional health",
      "Promotes relaxation",
    ],
  },
];





const Services = () => {
  const [selectedService, setSelectedService] = useState(null); // State to manage selected service
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      

      <section className="py-12 bg-white dark:bg-gray-900 transition duration-300">
        <div className="container mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We offer a wide range of services to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-100 dark:bg-gray-800 hover:bg-primary/20 duration-300 text-gray-900 dark:text-white rounded-lg group"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h2>
              <h1 className="text-center text-4xl font-semibold text-primary">
                Rs {service.price}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <p className="font-semibold text-xl text-gray-600 dark:text-gray-400">Duration: {service.duration}</p>
              <button
                onClick={() => openModal(service)}
                className="primary-btn mt-4 bg-primary text-white group-hover:scale-105 duration-200"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-11/12 sm:w-1/3 text-white">
              <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="mb-4">{selectedService.description}</p>
              <h3 className="font-semibold">Benefits:</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-300">
                {selectedService.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <p className="font-semibold">Duration: {selectedService.duration}</p>
              <p className="font-semibold text-xl text-primary">
                Price: Rs {selectedService.price}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-600 text-white rounded px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
