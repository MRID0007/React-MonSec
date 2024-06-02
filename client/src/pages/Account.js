import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="account">
          <h1 className="text-4xl font-bold mb-4">Account</h1>
          {user ? (
            <div>
              <p className="text-neutral-400 mb-4">Username: {user.username}</p>
              <p className="text-neutral-400 mb-4">Email: {user.email}</p>
              <button 
                onClick={handleLogout} 
                className="bg-purple-500 text-white py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <p className="text-neutral-400">You are not logged in.</p>
          )}
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Account;
