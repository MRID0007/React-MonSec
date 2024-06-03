'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventSignup extends Model {
    static associate(models) {
      EventSignup.belongsTo(models.User, { foreignKey: 'userId' });
      EventSignup.belongsTo(models.Event, { foreignKey: 'eventId' });
    }
  }

  EventSignup.init({
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EventSignup',
  });

  return EventSignup;
};
