
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('centers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      centerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sits: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      facilities:{
        type:Sequelize.ARRAY(Sequelize.STRING),
        allowNull:true
       },
       imgUrl:{
        type:Sequelize.STRING,
        allowNull:true
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('centers');
  }
};