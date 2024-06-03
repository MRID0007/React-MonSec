'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', [{
      name: 'End of Sem Games Night - Monsec Special Homebrew',
      date: new Date(),
      price: 'Free',
      image: '/assets/images/events/event1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MonSec x e2Cyber presents: CV Boost: Kickstart Your Cyber Career Workshop',
      date: new Date(),
      price: 'Free',
      image: '/assets/images/events/event2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Add more events as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
