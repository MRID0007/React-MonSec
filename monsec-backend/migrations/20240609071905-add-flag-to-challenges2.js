'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Challenges', 'flag', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'default_flag' // Temporary default value
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Challenges', 'flag');
  }
};
