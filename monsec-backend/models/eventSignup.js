const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventSignup extends Model {
    static associate(models) {
      this.belongsTo(models.Event, { as: 'Event', foreignKey: 'eventId' });
    }
  }

  EventSignup.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'EventSignup',
    }
  );

  return EventSignup;
};
