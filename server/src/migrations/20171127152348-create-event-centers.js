
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('eventCenters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      centerName:{
        types:Sequelize.STRING,
        allowNull:false
       },
     location: {
       types:Sequelize.STRING,
       allowNull:false
     },
     sits: {
       types:Sequelize.STRING,
       allowNull:false
     },
     cost:{
       types:Sequelize.INTEGER,
       allowNull:false
       },
     facilities: {
       type:Sequelize.ARRAY(Sequelize.STRING),
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
      centerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'eventCenters',
          key: 'id',
          as: 'centerId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('eventCenters');
  }
}