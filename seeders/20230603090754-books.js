'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        id: 1,
        title: "Sense and Sensibility",
        author: "Jane Austen",
        publisher: "Thomas Egerton",
        year: 1811,
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      },
      {
        id: 2,
        title: "Dracula",
        author: "Bram Stoker",
        publisher: "Archibald Constable and Company",
        year: 1897,
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      },
      {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publisher: "Thomas Egerton",
        year: 1813,
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      },
      {
        id: 4,
        title: "Frankenstein",
        author: "Mary Shelley",
        publisher: "Mavor & Jones",
        year: 1818,
        createdAt: "2023-06-03 00:00:00",
        updatedAt: "2023-06-03 00:00:00"
      }
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
