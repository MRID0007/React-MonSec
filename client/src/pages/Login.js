import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
      const { user, token } = response.data;
      setUser(user); // Update context
      localStorage.setItem('token', token); // Store the token if needed for authentication
      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="w-80">
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
          <Link to="/signup" className="text-purple-500">Sign Up</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
