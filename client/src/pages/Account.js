import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';
import avatars from '../data/avatars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(user?.avatar || avatars[0]);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/users/${user.id}`, {
        username,
        email,
        password,
        avatar
      });
      setUser(response.data.user);
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col items-center">
      <div className="w-full flex justify-end p-4">
        <Link to="/" className="text-neutral-50 text-xl">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
      </div>
      <div className="w-full max-w-sm bg-neutral-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Account</h2>
        <div className="flex flex-col items-center mb-4">
          <img
            src={`/avatars/${user.avatar}`}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-2"
            onError={(e) => (e.target.src = '/avatars/default.png')}
          />
          <p className="text-xl font-bold">{user.username}</p>
          <p className="text-neutral-400">{user.email}</p>
        </div>
        {editing ? (
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border p-2 mb-4 w-full bg-neutral-800 text-neutral-50"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border p-2 mb-4 w-full bg-neutral-800 text-neutral-50"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border p-2 mb-4 w-full bg-neutral-800 text-neutral-50"
            />
            <div className="mb-4">
              <label className="block mb-2">Select Avatar:</label>
              <div className="flex flex-wrap">
                {avatars.map((avatarOption, index) => (
                  <img
                    key={index}
                    src={`/avatars/${avatarOption}`}
                    alt={`Avatar ${index + 1}`}
                    className={`w-12 h-12 m-2 cursor-pointer ${avatar === avatarOption ? 'border-2 border-primary-500' : ''}`}
                    onClick={() => setAvatar(avatarOption)}
                  />
                ))}
              </div>
            </div>
            <button onClick={handleSave} className="bg-purple-500 text-white py-2 px-4 rounded w-full mb-4">
              Save Changes
            </button>
          </div>
        ) : (
          <button onClick={() => setEditing(true)} className="bg-purple-500 text-white py-2 px-4 rounded w-full mb-4">
            Edit Profile
          </button>
        )}
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded w-full">
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
