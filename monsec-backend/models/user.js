'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Add unique constraint
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Add unique constraint
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ctfRanking: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    ctfScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // Set default value to 0
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
