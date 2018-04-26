'use strict';

/* eslint-disable no-unused-vars */
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      securityQtn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      securityAns: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imgUrl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      userType: {
        type: Sequelize.ENUM('admin', 'regular'),
        defaultValue: 'regular'
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
//# sourceMappingURL=20171130101428-create-users.js.map