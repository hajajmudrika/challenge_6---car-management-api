'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Users', 
      [{
        id: 123456789,
        usertype_id: 1,
        fullname: "Super Admin",
        email: "admin@binarcrm.co.id",
        password: "$2a$12$q2xBtG360nZp9DQZPk./RuzwptkP0vcWABxqBDG3XbrHOVySIfAKC", // P@ssW0rd
        status: true,
        createdBy: "system",
        updatedBy: "system",
        createdAt: new Date(),
        updatedAt: new Date(),
      }]
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
