
export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fullname:{
       type:DataTypes.STRING,
       allowNull:false
    },
    username:{
      type: DataTypes.STRING,
      allowNull:false
      },
    email: {
     type: DataTypes.STRING,
     allowNull:false
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};