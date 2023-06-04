'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Members",
          key:"id"
        }
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Books",
          key:"id"
        }
      },
      dateTaken: {
        type: Sequelize.DATE
      },
      dateReturned: {
        type: Sequelize.DATE
      },
      deteriorated: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Loans');
  }
};