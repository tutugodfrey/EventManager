
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      facilities:{
        type:Sequelize.ARRAY(Sequelize.STRING),
        allowNull:true
       },
      confirm: {
        type:Sequelize.ENUM(pending, true, false),
        defaultValue:'pending'
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
      },
     
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};