
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeOfEvent: {
        types:Sequelize.STRING,
        allowNull:false
      },
      dateOfEvent:{
        types:Sequelize.DATE,
        allowNull:false
        },
      facilities: {
        type:Sequelize.ARRAY(Sequelize.STRING),
        allowNull:false
      },
      centerId: {
        types:Sequelize.INTEGER,
        allowNull:false
      },
      userId: {
        types:Sequelize.INTEGER,
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
      eventId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'events',
          key: 'id',
          as: 'eventId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};