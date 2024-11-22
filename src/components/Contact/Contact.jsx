import React, { useState } from "react";

const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility

  const handleContactClick = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility on button click
  };

  return (
    <>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-100 dark:bg-dark py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white">
                <span className="text-primary"> Sweat now, shine later.</span>{" "}
                Your body is a reflection of your lifestyle choices.
              </h1>
            </div>
            <div className="sm:grid sm:place-items-center">
              <button
                onClick={handleContactClick} // Call the function to show/hide the form
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the contact form based on isFormVisible */}
      {isFormVisible && (
        <div id="contact-form" className="dark:bg-black py-14">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-white mb-8">
              Get in Touch
            </h2>
            <form className="bg-gray-100 dark:bg-dark p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Name</label>
                  <input
                    type="text"
                    className="block w-full p-3 border border-gray-300 rounded-md dark:bg-black dark:text-white dark:border-gray-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>
                  <input
                    type="email"
                    className="block w-full p-3 border border-gray-300 rounded-md dark:bg-black dark:text-white dark:border-gray-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Phone</label>
                  <input
                    type="tel"
                    className="block w-full p-3 border border-gray-300 rounded-md dark:bg-black dark:text-white dark:border-gray-600"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Subject</label>
                  <input
                    type="text"
                    className="block w-full p-3 border border-gray-300 rounded-md dark:bg-black dark:text-white dark:border-gray-600"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Message</label>
                <textarea
                  className="block w-full p-3 border border-gray-300 rounded-md dark:bg-black dark:text-white dark:border-gray-600"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-3 bg-primary text-white hover:bg-primary/80 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
