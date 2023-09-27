// components/Navbar.js

import Link from 'next/link';
import { useState } from 'react';
// import {Poppins} from "next/font/google"

// const poppins = Poppins({
//     subsets:["latin"],
//     weight: ["100", "300", "500"]

// })

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  //Maybe add a purge option in the config file.

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement dark mode logic here by updating CSS classes
  };

  return (
    <nav className="bg-white p-2 text-white">
      <div className="container mx-auto flex justify-between items-center py-0">
        {/* Logo */}
        <div className="text-2xl font-bold top-0 left-0">
          <Link href="/" className='top-0 left-0'> <img src="/So9ify-logo.ico" alt="So9ify" className='top-0 left-0 py-0' /></Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-2 ml-auto">
          {/* <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${
              darkMode ? 'bg-yellow-400' : 'bg-blue-400'
            } hover:bg-yellow-500 focus:outline-none`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button> */}
     {/* <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label> */}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between space-x-4 text-black my-0 px-10">
          <Link href="/">Home</Link>
          <Link href="/products">Browse Products</Link>
          <Link href="/cart">Cart</Link>
        </div>

        {/* Search Bar */}
        {/* <div className="ml-auto mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-lg border border-white bg-transparent text-white placeholder-gray-300"
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
