import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/monsec-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-neutral-900 p-4 flex justify-between items-center">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="MonSec Logo" className="w-12 transition-transform duration-300 hover:scale-110" />
        </Link>
      </div>
      <nav className="relative">
        <button onClick={toggleMenu} className="text-neutral-50 text-xl focus:outline-none">
          ☰
        </button>
        <ul className={`fixed top-0 left-0 w-full h-full bg-neutral-800 text-neutral-50 transition-transform duration-300 z-50 ${menuOpen ? 'block' : 'hidden'}`}>
          <li className={`border-b border-neutral-700 ${location.pathname === '/' ? 'bg-primary-500' : ''}`}><Link to="/" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Home</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/about' ? 'bg-primary-500' : ''}`}><Link to="/about" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>About</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/competitions' ? 'bg-primary-500' : ''}`}><Link to="/competitions" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Competitions</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/contact' ? 'bg-primary-500' : ''}`}><Link to="/contact" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Contact</Link></li>
          <li className="border-b border-neutral-700"><a href="https://ctf.monsec.io/" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>CTFd↗</a></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/join' ? 'bg-primary-500' : ''}`}><Link to="/join" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Join</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/MemberHighlights' ? 'bg-primary-500' : ''}`}><Link to="/MemberHighlights" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>MemberHighlights</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Posts' ? 'bg-primary-500' : ''}`}><Link to="/Posts" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Posts</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Resources' ? 'bg-primary-500' : ''}`}><Link to="/Resources" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Resources</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Sponsorships' ? 'bg-primary-500' : ''}`}><Link to="/Sponsorships" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>sponsorships</Link></li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Teams' ? 'bg-primary-500' : ''}`}><Link to="/Teams" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Teams</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
