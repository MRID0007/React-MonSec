import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/monsec-logo.png';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="MonSec Logo" className="h-10" />
      </Link>
    </div>
    <nav className="flex">
      <button className="menu-toggle text-xl">☰</button>
      <ul className="hidden md:flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/competitions" className="hover:underline">Competitions</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        <li><a href="#" className="hover:underline">CTFd↗</a></li>
        <li><Link to="/join" className="hover:underline">Join</Link></li>
        <li><a href="#" className="hover:underline">Member Highlights</a></li>
        <li><a href="#" className="hover:underline">Posts</a></li>
        <li><a href="#" className="hover:underline">Resources</a></li>
        <li><a href="#" className="hover:underline">Sponsorships</a></li>
        <li><a href="#" className="hover:underline">Team</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
