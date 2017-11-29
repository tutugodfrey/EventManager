
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname:{
        types:Sequelize.STRING,
        allowNull:false
        },
      lastname:{
        types:Sequelize.STRING,
        allowNull:false
        },
      username:{
        types:Sequelize.STRING,
        allowNull:false,
        unique:true
        },
      email: {
        types:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      imageUrl: {
        types:Sequelize.STRING,
        allowNull:true
      },
      password:{
        types:Sequelize.STRING,
        allowNull:false
        },
      secureQtn:{
        types:Sequelize.STRING,
        allowNull:false
        },
      secureAns: {
        types:Sequelize.STRING,
        allowNull:false
      },
      gender: {
        types:Sequelize.STRING,
        allowNull:false
      },
      userType: {
        types:Sequelize.ENUM('admin', 'reqular'),
        defaultValue:'regular'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId : {
        type : Sequelize.INTEGER,
        OnDelete : 'CASCADE',
        references : {
          model : "users",
          key : "id",
          as : "userId"
        },
      }
    });
  },
  down: (queryInterface, Sequelize) =>{
    return queryInterface.dropTable('users');
  }
};
