import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import { UserContext } from '../contexts/UserContext';
import avatars from '../data/avatars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(avatars[0]);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/signup', { username, email, password, avatar });
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.error('Error signing up', error);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center">
      <div className="w-full flex justify-end p-4">
        <Link to="/" className="text-neutral-50 text-xl">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
      </div>
      <div className="w-full max-w-sm bg-neutral-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
        <button onClick={handleSignUp} className="bg-purple-500 text-white py-2 px-4 rounded w-full">
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-purple-500">Back to Login</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
