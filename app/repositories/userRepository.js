const { User } = require('../models');

class userRepository {
  static findAllPartially(whereClause) {
    return User.findAndCountAll(whereClause);
  }

  static find(id) {
    return User.findByPk(id);
  }

  static checkEmail(email) {
    return User.findOne({ where: { email: email, status: true }});
  }

  static create(user) {
    return User.create(user);
  }

  static update(id, user) {
    return User.update(user, { where: { id }});
  }

  /**
   * Soft Delete user
   * @param {number} id 
   * @param {string} deletor
   * @returns {Promise.<Array.<affectedCount, affectedRows>>} Promise [affectedCount, affectedRows]
   */
  static delete(id, deletor) {
    return User.update({
      status: false,
      deletedBy: deletor,
      deletedAt: new Date()
    },
    { where: { id }});
  }
}

module.exports = userRepository;