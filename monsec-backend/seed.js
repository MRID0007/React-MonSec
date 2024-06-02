const bcrypt = require('bcrypt');
const { User } = require('./models');

const seed = async () => {
  const hashedPassword = await bcrypt.hash('password123', 10);
  await User.create({
    username: 'testuser',
    email: 'testuser@example.com',
    password: hashedPassword,
    ctfRanking: 100,
  });
  console.log('User seeded');
};

seed();
