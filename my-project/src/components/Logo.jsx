// Logo.jsx
import React from 'react';
import LogoImage from '../assets/Logo.jpg'; // Use correct path

const Logo = () => (
  <a href="/" className="flex items-center">
    <img src={LogoImage} alt="CareerCraft Logo" className="w-20 h-10 object-contain" />
    <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">CareerCraft</span>
  </a>
);

export default Logo;
