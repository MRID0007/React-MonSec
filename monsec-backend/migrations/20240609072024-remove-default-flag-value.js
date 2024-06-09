'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Challenges', 'flag', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: null
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Challenges', 'flag', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'default_flag'
    });
  }
};
