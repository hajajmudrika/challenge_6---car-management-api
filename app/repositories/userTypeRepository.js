const { UserType } = require('../models');

/**
 * @class userTypeRepository userTypeRepository.js
 * @author Rizky Adji Pangestu
 */
class userTypeRepository {
  static findAll() {
    return UserType.findAll();
  }
  static find(id) {
    return UserType.findByPk(id);
  }
}

module.exports = userTypeRepository;