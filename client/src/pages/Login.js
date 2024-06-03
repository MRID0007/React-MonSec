import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center">
      <div className="w-full max-w-sm bg-neutral-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
        <button onClick={handleLogin} className="bg-purple-500 text-white py-2 px-4 rounded w-full">
          Login
        </button>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-purple-500">Sign Up</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
