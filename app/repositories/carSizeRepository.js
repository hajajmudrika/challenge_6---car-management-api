const { CarSize } = require('../models');

/**
 * @class carSizeRepository carSizeRepository.js
 * @author Rizky Adji Pangestu
 */
class carSizeRepository {
  static findAll() {
    return CarSize.findAll();
  }
  static find(id) {
    return CarSize.findByPk(id);
  }
}

module.exports = carSizeRepository;