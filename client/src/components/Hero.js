import React from 'react';
import logo from '../assets/images/monsec-logo.png';

const Hero = () => (
  <div className="text-center py-12 bg-gray-100">
    <img src={logo} alt="MonSec Logo" className="mx-auto mb-4 h-32" />
    <p className="text-lg mb-4">We are Monash University's very own cyber-security club run by current students and supported by industry partners.</p>
    <div className="space-x-2">
      <a href="/about" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">FIND OUT MORE</a> 
      or 
      <a href="/join" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">JOIN NOW</a>
    </div>
  </div>
);

export default Hero;
