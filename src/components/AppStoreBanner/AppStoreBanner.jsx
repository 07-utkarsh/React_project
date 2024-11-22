import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/dumbell.jpg";

const bannerStyle = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div className="container mx-auto">
      <div
        className="relative text-white py-10 sm:min-h-[400px] flex justify-center items-center rounded-xl shadow-lg overflow-hidden"
        style={bannerStyle}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative z-10 max-w-xl mx-auto text-center space-y-6 px-6 sm:px-0">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl font-semibold font-serif text-white drop-shadow-lg"
          >
            Get Started with Our App
          </h1>
          <p
            data-aos="fade-up"
            className="text-lg sm:text-xl text-gray-200 drop-shadow-md sm:px-12"
          >
            Experience a new way to achieve your fitness goals. Download the app and join us today!
          </p>
          <div
            data-aos="fade-up"
            className="flex justify-center items-center gap-4"
          >
            <a href="#">
              <img
                src={PlayStoreImg}
                alt="Play Store"
                className="w-[150px] sm:w-[120px] md:w-[200px] transform transition duration-300 hover:scale-105 hover:shadow-xl"
              />
            </a>
            <a href="#">
              <img
                src={AppStoreImg}
                alt="App Store"
                className="w-[150px] sm:w-[120px] md:w-[200px] transform transition duration-300 hover:scale-105 hover:shadow-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
