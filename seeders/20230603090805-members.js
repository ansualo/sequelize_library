'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [
      {
        id: 1,
        name: "Andrea",
        surname: "Suarez",
        phone: "611111111",
        email: "andrea@gmail.com",
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      },
      {
        id: 2,
        name: "Judit",
        surname: "Grau",
        phone: "622222222",
        email: "judit@gmail.com",
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      },
      {
        id: 3,
        name: "Nastia",
        surname: "Kosovets",
        phone: "633333333",
        email: "nastia@gmail.com",
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      },
      {
        id: 4,
        name: "Coral",
        surname: "Jimenez",
        phone: "644444444",
        email: "coral@gmail.com",
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      },
    ], {});
  
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
