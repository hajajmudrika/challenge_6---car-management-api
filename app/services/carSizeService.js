const carSizeRepository = require('../repositories/carSizeRepository');

/**
 * @class carSizeService carSizeService.js
 * @author Rizky Adji Pangestu
 */
class carSizeService {
  static getAll() {
    return carSizeRepository.findAll();
  }
  static get(id) {
    return carSizeRepository.find(id);
  }
}

module.exports = carSizeService;