import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
import avatars from '../data/avatars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const AccountSettings = () => {
  const { user, setUser } = useContext(UserContext);
  const [editingField, setEditingField] = useState(null);
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [avatar, setAvatar] = useState(user?.avatar || avatars[0]);

  const handleSave = async () => {
    try {
      const updateData = { username, email, avatar };
      if (newPassword) {
        updateData.oldPassword = oldPassword;
        updateData.newPassword = newPassword;
      }
      const response = await axios.put(`http://localhost:3001/users/${user.id}`, updateData);
      setUser(response.data.user);
      setEditingField(null);
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-neutral-800 rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-700 h-24 flex items-center p-4 relative">
          <div className="absolute top-12 left-4 w-24 h-24">
            <img
              src={`/avatars/${user.avatar}`}
              alt="User Avatar"
              className="w-full h-full rounded-full border-4 border-blue-700"
              onError={(e) => (e.target.src = '/avatars/default.png')}
            />
          </div>
        </div>
        <div className="p-8 pt-16">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-neutral-400">Username</h3>
                {editingField === 'username' ? (
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 w-full bg-neutral-800 text-neutral-50"
                  />
                ) : (
                  <p className="text-xl font-bold">{user.username}</p>
                )}
              </div>
              <button onClick={() => setEditingField(editingField === 'username' ? null : 'username')} className="text-blue-500">
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-neutral-400">Email Address</h3>
                {editingField === 'email' ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full bg-neutral-800 text-neutral-50"
                  />
                ) : (
                  <p className="text-xl font-bold">{user.email}</p>
                )}
              </div>
              <button onClick={() => setEditingField(editingField === 'email' ? null : 'email')} className="text-blue-500">
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-neutral-400">Change Avatar</h3>
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
            </div>
          </div>
          <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4">
            Save Changes
          </button>
        </div>
      </div>
      <div className="w-full max-w-4xl bg-neutral-800 rounded-lg shadow-md overflow-hidden mt-8 p-8">
        <h2 className="text-2xl font-bold mb-4">Password and Authentication</h2>
        <div className="mb-4">
          <h3 className="text-neutral-400">Change Password</h3>
          {editingField === 'password' ? (
            <>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Old Password"
                className="border p-2 w-full bg-neutral-800 text-neutral-50 mb-2"
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="border p-2 w-full bg-neutral-800 text-neutral-50"
              />
            </>
          ) : (
            <p className="text-xl font-bold">********</p>
          )}
          <button onClick={() => setEditingField(editingField === 'password' ? null : 'password')} className="text-blue-500">
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          {editingField === 'password' && (
            <button className="text-blue-500 mt-2">Forgot Password?</button>
          )}
        </div>
        <div className="flex justify-between items-center gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Enable MFA</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Register Security Key</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
