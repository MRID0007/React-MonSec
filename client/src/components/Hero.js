import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/monsec-logo.png';

const Hero = () => (
  <div className="text-center py-12 bg-neutral-900">
    <Link to="/">
      <img src={logo} alt="MonSec Logo" className="mx-auto mb-4 h-16" />
    </Link>
    <p className="text-lg mb-4 text-neutral-300 font-mono">We are Monash University's very own cyber-security club run by current students and supported by industry partners.</p>
    <div className="space-x-2">
      <a href="/about" className="text-primary-500 font-bold hover:underline">FIND OUT MORE</a>
      <span className="text-neutral-300">or</span>
      <a href="/join" className="text-primary-500 font-bold hover:underline">JOIN NOW</a>
    </div>
  </div>
);

export default Hero;
