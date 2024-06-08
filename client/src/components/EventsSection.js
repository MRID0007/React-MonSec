import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

const EventsSection = () => {
  const { user } = useContext(UserContext);
  const [pastEvents, setPastEvents] = useState([]);
  const [futureEvents, setFutureEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${user.id}/events`);
        setPastEvents(response.data.pastEvents);
        setFutureEvents(response.data.futureEvents);
      } catch (error) {
        console.error('Error fetching user events:', error);
      }
    };

    if (user) {
      fetchEvents();
    }
  }, [user]);

  const handleRemoveEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:3001/events/${eventId}/cancel`, { data: { userId: user.id } });
      setFutureEvents(futureEvents.filter(event => event.event.id !== eventId));
    } catch (error) {
      console.error('Error removing event', error);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-neutral-800 p-8 rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Future Events</h3>
        {futureEvents.length === 0 ? (
          <p>No future events.</p>
        ) : (
          futureEvents.sort((a, b) => new Date(a.event.date) - new Date(b.event.date)).map(({ event }) => (
            <div key={event.id} className="mb-2">
              <div className="flex justify-between items-center">
                <p>{event.name} - {new Date(event.date).toLocaleDateString()}</p>
                <button
                  onClick={() => handleRemoveEvent(event.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Remove
                </button>
              </div>
              <hr className="my-2 border-neutral-700" />
            </div>
          ))
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Past Events</h3>
        {pastEvents.length === 0 ? (
          <p>No past events.</p>
        ) : (
          pastEvents.sort((a, b) => new Date(a.event.date) - new Date(b.event.date)).map(({ event }) => (
            <div key={event.id} className="mb-2">
              <p>{event.name} - {new Date(event.date).toLocaleDateString()}</p>
              <hr className="my-2 border-neutral-700" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsSection;
