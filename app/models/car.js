'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    size_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    photo: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    deletedBy: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Car',
  });
  Car.associate = function (models) {
    Car.belongsTo(models.CarSize, {foreignKey: 'size_id', as: 'size'})
  }
  return Car;
};