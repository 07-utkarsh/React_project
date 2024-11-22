import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Gold Card",
    price: 499,
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "12 months",
    additionalDetails: "Includes access to premium classes and workshops.",
    benefits: [
      "Access to exclusive fitness events.",
      "Priority booking for classes.",
      "Monthly progress tracking.",
    ],
    aosDelay: "0",
  },
  {
    name: "Flexible Card",
    price: 899,
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "12 months",
    additionalDetails: "Perfect for those with a variable schedule.",
    benefits: [
      "Flexible scheduling for classes.",
      "Access to on-demand workouts.",
      "Weekly nutritional guidance.",
    ],
    aosDelay: "500",
  },
  {
    name: "Platinum Card",
    price: 1299,
    icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration: "12 months",
    additionalDetails: "Best value with extra perks and personal attention.",
    benefits: [
      "Personalized workout plans.",
      "Unlimited access to all classes.",
      "Access to members-only workshops.",
    ],
    aosDelay: "1000",
  },
  // New Cards
  {
    name: "Premium Card",
    price: 1599,
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: [
      "All-inclusive access to fitness area.",
      "Unlimited training sessions.",
      "Dedicated personal trainer.",
      "Exclusive workshops and events.",
    ],
    duration: "12 months",
    additionalDetails: "Ultimate package for serious fitness enthusiasts.",
    benefits: [
      "Priority access to new classes.",
      "Monthly wellness check-ins.",
      "Free merchandise and gear.",
    ],
    aosDelay: "1500",
  },
  {
    name: "Family Card",
    price: 1999,
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: [
      "Monthly access for up to 4 family members.",
      "Group training sessions.",
      "Family-focused wellness workshops.",
      "Personal trainer available.",
    ],
    duration: "12 months",
    additionalDetails: "Great value for families looking to stay fit together.",
    benefits: [
      "Family wellness activities.",
      "Special rates for kids' classes.",
      "Customized family fitness plans.",
    ],
    aosDelay: "2000",
  },
  {
    name: "Student Card",
    price: 899,
    icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
    link: "#",
    description: [
      "Monthly access to fitness area.",
      "Group training sessions tailored for students.",
      "Access to study and workout sessions.",
      "Discounted classes for students.",
    ],
    duration: "12 months",
    additionalDetails: "Designed for students who want to balance fitness and study.",
    benefits: [
      "Special rates for group classes.",
      "Access to academic workshops.",
      "Monthly fitness challenges.",
    ],
    aosDelay: "2500", // Adjust the delay for animation
},

];

const Service = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleLearnMoreClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle card details
  };

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1 className="text-3xl font-bold text-center sm:text-4xl">
              Why <span className="text-primary">Choose</span> Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group"
              >
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  Rs {skill.price}
                </h1>

                {skill.description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
                <p className="font-semibold text-2xl">Duration: {skill.duration}</p>

                <button
                  onClick={() => handleLearnMoreClick(index)}
                  className="primary-btn mt-4 group-hover:scale-105 duration-200"
                >
                  {activeCard === index ? "Show Less" : "Learn More"}
                </button>

                {activeCard === index && (
                  <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded">
                    <p>{skill.additionalDetails}</p>
                    <h2 className="font-bold text-lg mt-2">Benefits:</h2>
                    <ul className="list-disc list-inside mt-2 pl-5">
                      {skill.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-left">{benefit}</li> // Aligning benefits text to the left
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
