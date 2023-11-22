const userTypeRepository = require('../repositories/userTypeRepository');

/**
 * @class userTypeService userTypeService.js
 * @author Rizky Adji Pangestu
 */
class userTypeService {
  static getAll() {
    return userTypeRepository.findAll();
  }
  static get(id) {
    return userTypeRepository.find(id);
  }
}

module.exports = userTypeService;