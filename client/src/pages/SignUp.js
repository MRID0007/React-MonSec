import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/signup', { username, email, password });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error signing up');
      }
    }
  };

  const closeErrorPopup = () => {
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="w-80">
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
        <button onClick={handleSignUp} className="bg-purple-500 text-white py-2 px-4 rounded w-full">
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-purple-500">Back to Login</Link>
        </div>
      </div>
      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <p className="text-red-600">{errorMessage}</p>
            <button onClick={closeErrorPopup} className="mt-4 bg-purple-500 text-white py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SignUp;
