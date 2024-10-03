// contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { isAuthenticated, user: auth0User, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && auth0User) {
      setUser({
        username: auth0User.nickname || auth0User.name,
        email: auth0User.email,
        avatar: auth0User.picture,
        // Add other user properties as needed
      });
    } else {
      setUser(null);
    }
  }, [isAuthenticated, auth0User]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!isLoading && children}
    </UserContext.Provider>
  );
};
