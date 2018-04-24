'use strict';

/* eslint-disable no-unused-vars */
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      facilities: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      imgUrl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      confirm: {
        type: Sequelize.ENUM('pending', true, false),
        defaultValue: 'pending'
      },
      centerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return queryInterface.dropTable('events');
  }
};
//# sourceMappingURL=20171130101836-create-events.js.map