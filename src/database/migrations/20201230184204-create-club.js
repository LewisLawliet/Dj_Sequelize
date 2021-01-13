'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clubs', {
      /*id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },*/


      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        default: Sequelize.fn("uuid_generate_v4")
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clubs');
  }
};