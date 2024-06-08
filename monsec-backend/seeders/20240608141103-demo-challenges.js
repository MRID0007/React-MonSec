'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Challenges', [
      {
        name: 'Salad Cipher',
        category: 'Cryptography',
        points: 50,
        solves: 100,
        likes: 90,
        completed: true,
        description: 'Description for Salad Cipher',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Of-fence-ive Security',
        category: 'Cryptography',
        points: 50,
        solves: 80,
        likes: 75,
        completed: false,
        description: 'Description for Of-fence-ive Security',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mystery Cat',
        category: 'Digital Forensics',
        points: 50,
        solves: 120,
        likes: 95,
        completed: true,
        description: 'Description for Mystery Cat',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stegosaurus',
        category: 'Digital Forensics',
        points: 100,
        solves: 60,
        likes: 50,
        completed: false,
        description: 'Description for Stegosaurus',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sanity Check',
        category: 'General Skills',
        points: 5,
        solves: 200,
        likes: 180,
        completed: true,
        description: 'Description for Sanity Check',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Debugging',
        category: 'General Skills',
        points: 50,
        solves: 150,
        likes: 130,
        completed: false,
        description: 'Description for Debugging',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gift Horse',
        category: 'General Skills',
        points: 50,
        solves: 140,
        likes: 110,
        completed: true,
        description: 'Description for Gift Horse',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Happily Ever After',
        category: 'General Skills',
        points: 100,
        solves: 70,
        likes: 60,
        completed: false,
        description: 'Description for Happily Ever After',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hometown',
        category: 'OSINT',
        points: 50,
        solves: 160,
        likes: 140,
        completed: true,
        description: 'Description for Hometown',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dinner Recommendation',
        category: 'OSINT',
        points: 50,
        solves: 150,
        likes: 130,
        completed: false,
        description: 'Description for Dinner Recommendation',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Holiday Snaps',
        category: 'OSINT',
        points: 100,
        solves: 80,
        likes: 70,
        completed: true,
        description: 'Description for Holiday Snaps',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crowded',
        category: 'OSINT',
        points: 100,
        solves: 90,
        likes: 80,
        completed: false,
        description: 'Description for Crowded',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sunrise',
        category: 'OSINT',
        points: 100,
        solves: 100,
        likes: 90,
        completed: true,
        description: 'Description for Sunrise',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beach',
        category: 'OSINT',
        points: 100,
        solves: 110,
        likes: 100,
        completed: false,
        description: 'Description for Beach',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vista Point',
        category: 'OSINT',
        points: 200,
        solves: 40,
        likes: 30,
        completed: true,
        description: 'Description for Vista Point',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'My City',
        category: 'OSINT',
        points: 200,
        solves: 50,
        likes: 40,
        completed: false,
        description: 'Description for My City',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nature',
        category: 'OSINT',
        points: 200,
        solves: 60,
        likes: 50,
        completed: true,
        description: 'Description for Nature',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secure Password Hasher 1',
        category: 'Reverse Engineering',
        points: 50,
        solves: 130,
        likes: 110,
        completed: true,
        description: 'Description for Secure Password Hasher 1',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'XOR-cise',
        category: 'Reverse Engineering',
        points: 50,
        solves: 120,
        likes: 100,
        completed: false,
        description: 'Description for XOR-cise',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secure Password Hasher 2',
        category: 'Reverse Engineering',
        points: 100,
        solves: 90,
        likes: 70,
        completed: true,
        description: 'Description for Secure Password Hasher 2',
        author: 'Sarah Lam',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Challenges', null, {});
  }
};
