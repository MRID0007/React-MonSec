import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import Footer from '../components/Footer';

const Events = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSignup = async (eventId) => {
    try {
      await axios.post(`http://localhost:3001/events/${eventId}/signup`, { userId: user.id });
      alert('Signed up successfully');
    } catch (error) {
      console.error('Error signing up for event', error);
      alert('Failed to sign up');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="w-80">
        {events.map((event) => (
          <div key={event.id} className="mb-4 p-4 bg-neutral-800 rounded">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-neutral-400">{event.description}</p>
            <p className="text-neutral-400">{new Date(event.date).toLocaleString()}</p>
            {user && (
              <button
                onClick={() => handleSignup(event.id)}
                className="bg-purple-500 text-white py-2 px-4 rounded mt-2"
              >
                Sign Up
              </button>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
