import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const JoinPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const element = document.documentElement;

  // Dark Mode functionality
  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Example logic for login
      if (email === 'test@example.com' && password === 'password123') {
        alert('Logged in successfully');
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid email or password');
      }
    } else {
      // Example logic for signup
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      alert('Signed up successfully');
      console.log('Signed up successfully', { firstName, lastName, email, password });
      setErrorMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
      <div className="bg-gray-800 dark:bg-gray-900 p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold text-white dark:text-white mb-4 text-center">
          {isLogin ? 'Login' : 'Signup'}
        </h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 mb-4 bg-black text-white border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-3 mb-4 bg-black text-white border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 mb-4 bg-black text-white border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 mb-4 bg-black text-white border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-3 mb-4 bg-black text-white border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              required
            />
          )}
          {isLogin && (
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 rounded border-gray-600 accent-orange-500"
              />
              <label htmlFor="rememberMe" className="text-gray-300">Remember Me</label>
            </div>
          )}
          <button
            type="submit"
            className="bg-orange-600 text-white py-2 px-4 rounded w-full hover:bg-orange-700 transition duration-300 transform hover:scale-105"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <p className="mt-4 text-gray-400 dark:text-gray-400 text-center cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </p>
      </div>

      {/* Dark Mode toggle */}
      {/* <div className="absolute top-4 right-4">
        {theme === 'dark' ? (
          <BiSolidSun onClick={() => setTheme('light')} className="text-2xl cursor-pointer text-white" />
        ) : (
          <BiSolidMoon onClick={() => setTheme('dark')} className="text-2xl cursor-pointer text-white" />
        )}
      </div> */}
    </div>
  );
};

export default JoinPage;
