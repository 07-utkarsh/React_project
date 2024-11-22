import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
              <FaEnvelope className="inline-block mr-2" />
              <a href="mailto:arora3682@gmail.com" className="hover:underline">
               utkarshsharma80777@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <FaPhone className="inline-block mr-2" />
              +91 98769xxxxx
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/Arjun9234"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/arjun2204/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Gym Info Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Our Gym</h2>
            <p className="mb-4">
              At  Fitness Edge, we are dedicated to helping you achieve your fitness goals.
              With world-class equipment, expert trainers, and a variety of classes, 
              we provide the best environment for your transformation.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-700 pt-4 mt-8">
          <p>© 2024 Fitness Edge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
