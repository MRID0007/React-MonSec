import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AccountSettings from '../components/AccountSettings';
import EventsSection from '../components/EventsSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCalendarAlt, faCog, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex relative">
      <aside className="w-64 bg-neutral-800 p-4 flex flex-col">
        <div className="flex items-center mb-8">
          <FontAwesomeIcon icon={faUserCircle} className="text-3xl mr-2" />
          <div>
            <p className="text-lg font-bold">{user.username}</p>
            <p className="text-sm text-neutral-400">{user.email}</p>
          </div>
        </div>
        <nav className="flex-1">
          <Link to="/account" className="flex items-center mb-4 text-lg">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Account Settings
          </Link>
          <Link to="/account/events" className="flex items-center text-lg">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            Events
          </Link>
        </nav>
        <button onClick={handleLogout} className="flex items-center text-red-500 mt-4">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </button>
      </aside>
      <main className="flex-1 p-8">
        <div className="absolute top-4 right-4">
          <button onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl text-neutral-50" />
          </button>
        </div>
        <Routes>
          <Route path="/" element={<AccountSettings user={user} setUser={setUser} />} />
          <Route path="events" element={<EventsSection user={user} />} />
        </Routes>
      </main>
    </div>
  );
};

export default Account;
