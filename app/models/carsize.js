'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CarSize.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarSize',
  });
  CarSize.associate = function (models) {
    CarSize.hasMany(models.Car, {foreignKey: 'size_id',as: 'cars'});
  }
  return CarSize;
};