// src/pages/Events.js
import React, { useState } from 'react';
import events from '../data/events';
import EventModal from '../components/EventModal';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Events = () => {
  const { user } = useContext(UserContext);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50">
      <Header />
      <main className="p-4">
        <h1 className="text-4xl font-bold mb-8">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
                <p className="text-neutral-400 mb-2">{event.date}</p>
                <p className="text-neutral-400 mb-4">{event.price}</p>
                <button 
                  onClick={() => handleEventClick(event)} 
                  className="bg-purple-500 text-white py-2 px-4 rounded"
                >
                  View Event
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedEvent && (
          <EventModal event={selectedEvent} user={user} onClose={handleCloseModal} />
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Events;
