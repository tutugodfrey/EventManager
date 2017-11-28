'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message:{
        types:Sequelize.STRING,
        allowNull:false
        },
      userId: {
        types:Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      nodificationId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'notifications',
          key: 'id',
          as: 'notificatinId',
        },
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('notifications');
  }
};