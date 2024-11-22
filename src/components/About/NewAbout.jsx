import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import '../../custom.css';


const NewAbout = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingSlot, setBookingSlot] = useState("");
  const [bookingDate, setBookingDate] = useState("");
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

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}. Your query has been submitted.`);
    setQuery("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${bookingName}. Your slot has been booked for ${bookingDate}.`);
    setBookingName("");
    setBookingEmail("");
    setBookingPhone("");
    setBookingSlot("");
    setBookingDate("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200 p-8 transition duration-300 font-poppins">
      <div className="container mx-auto max-w-4xl relative">
        <div className="absolute top-4 right-4">
          {theme === "dark" ? (
            <BiSolidSun
              onClick={() => setTheme("light")}
              className="text-2xl text-yellow-500 cursor-pointer transition hover:scale-110"
            />
          ) : (
            <BiSolidMoon
              onClick={() => setTheme("dark")}
              className="text-2xl text-blue-500 cursor-pointer transition hover:scale-110"
            />
          )}
        </div>

        <h1 className="text-5xl font-bold mb-8 text-center">
          Welcome to Our Fitness Portal
        </h1>
        <p className="text-lg mb-12 text-center">
          Join us on a journey to better health and fitness. Book slots with our experts or submit your queries.
        </p>

        {/* Book a Slot Form */}
        <div className="glass-card p-8 rounded-lg shadow-xl mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">
            Book a Slot
          </h2>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={bookingEmail}
              onChange={(e) => setBookingEmail(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={bookingPhone}
              onChange={(e) => setBookingPhone(e.target.value)}
              className="input-field"
              required
            />
            <select
              value={bookingSlot}
              onChange={(e) => setBookingSlot(e.target.value)}
              className="input-field"
              required
            >
              <option value="" disabled>Select your preferred slot</option>
              <option value="Morning">Morning (6 AM - 10 AM)</option>
              <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="Evening">Evening (5 PM - 9 PM)</option>
            </select>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="input-field"
              required
            />
            <button type="submit" className="button-primary">
              Book Slot
            </button>
          </form>
        </div>

        {/* Submit a Query Form */}
        <div className="glass-card p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">
            Submit a Query
          </h2>
          <form onSubmit={handleQuerySubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
              required
            />
            <textarea
              placeholder="Your Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-field"
              rows="4"
              required
            />
            <button type="submit" className="button-primary">
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAbout;
