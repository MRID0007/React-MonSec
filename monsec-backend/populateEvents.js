const { Event } = require('./models');

const events = [
  {
    id: 1,
    name: 'End of Sem Games Night - Monsec Special Homebrew',
    date: '2024-05-22T18:00:00Z',
    price: 'Free',
    image: '/assets/images/events/event1.png',
  },
  {
    id: 2,
    name: 'MonSec x e2Cyber presents: CV Boost: Kickstart Your Cyber Career Workshop',
    date: '2024-05-20T18:00:00Z',
    price: 'Free',
    image: '/assets/images/events/event2.png',
  },
  {
    id: 3,
    name: 'Cryptography Essentials - Monsec Homebrew Workshop',
    date: '2024-05-15T18:00:00Z',
    price: 'Free',
    image: '/assets/images/events/event3.png',
  },
  {
    id: 4,
    name: 'Career Pathways and Identity systems - Monsec Masterclass',
    date: '2024-05-13T18:00:00Z',
    price: 'Free',
    image: '/assets/images/events/event4.png',
  },
  {
    id: 5,
    name: 'Monsec - Adjourned Ordinary General Meeting ( OGM )',
    date: '2024-05-08T18:00:00Z',
    price: 'Free',
    image: '/assets/images/events/event5.png',
  },
  {
    id: 6,
    name: 'Future Event for Testing',
    date: '2024-12-31T18:00:00Z',
    price: 'Free',
    image: '/assets/images/events/event1.png',
  },
];

const populateEvents = async () => {
  try {
    for (const event of events) {
      const existingEvent = await Event.findByPk(event.id);
      if (!existingEvent) {
        await Event.create({
          id: event.id,
          name: event.name,
          date: new Date(event.date),
          price: event.price,
          image: event.image,
        });
      } else {
        // Optionally, update the existing event's details if needed
        await existingEvent.update({
          name: event.name,
          date: new Date(event.date),
          price: event.price,
          image: event.image,
        });
      }
    }
    console.log('Events have been populated successfully.');
  } catch (error) {
    console.error('Error populating events:', error);
  }
};

populateEvents();

// run: node populateEvents.js
