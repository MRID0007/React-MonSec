import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventModal = ({ event, user, onClose }) => {
  const [attending, setAttending] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await axios.post(`http://localhost:3001/events/${event.id}/signup`, { userId: user.id });
      setAttending(true);
    } catch (error) {
      console.error('Error joining event', error);
      if (error.response && error.response.status === 400) {
        setError('You are already signed up for this event.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-neutral-800 p-6 rounded-lg max-w-lg w-full text-neutral-50 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-50">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <p className="mb-4">{event.date}</p>
        <p className="mb-4">{event.price}</p>
        <img src={event.image} alt={event.name} className="mb-4 w-full h-auto" />
        {attending ? (
          <p className="text-green-500">You are attending this event</p>
        ) : (
          <>
            <button onClick={handleJoin} className="bg-purple-500 text-white py-2 px-4 rounded">
              Join Event
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default EventModal;
