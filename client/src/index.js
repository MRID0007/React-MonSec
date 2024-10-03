import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './contexts/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
