'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight_names extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flight_names.init({
    f_name: DataTypes.STRING,
    f_rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'flight_names',
  });
  return flight_names;
};