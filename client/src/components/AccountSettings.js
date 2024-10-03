import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import avatars from '../data/avatars';

const AccountSettings = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const { getAccessTokenSilently, logout } = useAuth0();

  useEffect(() => {
    if (user) {
      setUsername(user.username || '');
      setEmail(user.email || '');
      setAvatar(user.avatar || avatars[0]);
    }
  }, [user]);

  const getAuth0Token = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
        scope: 'update:users read:users'
      });
      return token;
    } catch (error) {
      console.error('Error getting Auth0 token:', error);
    }
  };

  const updateUser = async (userId, data) => {
    const token = await getAuth0Token();
    try {
      const response = await axios.patch(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleSave = async () => {
    if (!user) {
      console.error('User not found');
      return;
    }

    const userId = user.sub;
    const data = {
      username,
      email,
      user_metadata: { avatar },
    };

    try {
      const updatedUser = await updateUser(userId, data);
      setUser(updatedUser);
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-neutral-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-8 pt-16">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-neutral-400">Username</h3>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border p-2 w-full bg-neutral-800 text-neutral-50"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-neutral-400">Email Address</h3>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 w-full bg-neutral-800 text-neutral-50"
                />
              </div>
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
          <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-red-500 text-white py-2 px-4 rounded w-full mt-4">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
