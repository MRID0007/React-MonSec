import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
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
        password
      });
      setUser(response.data.user);
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Account</h2>
      <div className="w-80">
        {editing ? (
          <>
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
            <button onClick={handleSave} className="bg-purple-500 text-white py-2 px-4 rounded w-full">
              Save
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
            <button onClick={() => setEditing(true)} className="bg-purple-500 text-white py-2 px-4 rounded w-full mb-4">
              Edit Profile
            </button>
          </>
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
