// components/Header.js
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/monsec-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../contexts/UserContext';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useContext(UserContext);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

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
      <nav className="relative flex items-center">
        <button onClick={toggleMenu} className="text-neutral-50 text-xl focus:outline-none mr-4">
          ☰
        </button>
        {isAuthenticated && user ? (
          <Link to="/account" className="text-neutral-50 text-xl focus:outline-none flex items-center">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
              onError={(e) => (e.target.src = '/avatars/default.png')}
            />
            <span className="ml-2">{user.username}</span>
          </Link>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="text-neutral-50 text-xl focus:outline-none flex items-center"
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="ml-2">Login</span>
          </button>
        )}
        <ul className={`fixed top-0 left-0 w-full h-full bg-neutral-800 text-neutral-50 transition-transform duration-300 z-50 ${menuOpen ? 'block' : 'hidden'}`}>
          <li className={`border-b border-neutral-700 ${location.pathname === '/' ? 'bg-primary-500' : ''}`}>
            <Link to="/" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Home</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/about' ? 'bg-primary-500' : ''}`}>
            <Link to="/about" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>About</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/competitions' ? 'bg-primary-500' : ''}`}>
            <Link to="/competitions" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Competitions</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/contact' ? 'bg-primary-500' : ''}`}>
            <Link to="/contact" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/events' ? 'bg-primary-500' : ''}`}>
            <Link to="/events" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Events</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/ctfchallenges' ? 'bg-primary-500' : ''}`}>
            <Link to="/ctfchallenges" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>CTF Challenges</Link>
          </li>
          <li className="border-b border-neutral-700">
            <a href="https://ctf.monsec.io/" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>CTFd↗</a>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/join' ? 'bg-primary-500' : ''}`}>
            <Link to="/join" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Join</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/MemberHighlights' ? 'bg-primary-500' : ''}`}>
            <Link to="/MemberHighlights" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Member Highlights</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Posts' ? 'bg-primary-500' : ''}`}>
            <Link to="/Posts" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Posts</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Resources' ? 'bg-primary-500' : ''}`}>
            <Link to="/Resources" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Resources</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Sponsorships' ? 'bg-primary-500' : ''}`}>
            <Link to="/Sponsorships" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Sponsorships</Link>
          </li>
          <li className={`border-b border-neutral-700 ${location.pathname === '/Teams' ? 'bg-primary-500' : ''}`}>
            <Link to="/Teams" className="block py-4 px-6 hover:bg-primary-500" onClick={toggleMenu}>Teams</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
