
/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eventType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eventDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      facilities: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      imgUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      confirm: {
        type: Sequelize.ENUM('pending', true, false),
        defaultValue: 'pending',
      },
      centerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  },
};
