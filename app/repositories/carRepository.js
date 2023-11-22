const { Car } = require('../models');

/**
 * @class carRepository carRepository.js
 * @author Rizky Adji Pangestu
 */
class carRepository {
  static findAllPartially(whereClause) {
    return Car.findAndCountAll(whereClause);
  }

  static find(id) {
    return Car.findByPk(id);
  }

  static create(dataObj) {
    return Car.create(dataObj);
  }

  static update(id, dataObj) {
    return Car.update(dataObj, { where: { id }});
  }

  /**
   * Soft delete car
   * @param {number} id 
   * @param {string} deletor 
   * @returns {Promise.<Array.<affectedCount, affectedRows>>} Promise [affectedCount, affectedRows]
   */
  static delete(id, deletor) {
    return Car.update({
      deleted: true,
      deletedBy: deletor,
      deletedAt: new Date()
    },
    { where: { id }});
  }
}

module.exports = carRepository;