
const users = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    firstname:{
      type: DataTypes.STRING,
      allowNull: false,
      },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false,
      },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
      },
    secureQtn:{
      type: DataTypes.STRING,
      allowNull: false
      },
    secureAns: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userType: {
      type: DataTypes.STRING.ENUM('admin', 'reqular'),
      defaultValue:'regular'
    }
  })
  users.associate = (models) => {
    users.hasMany(model.events, {
      foriegnKey: 'userId',
      as: 'events'
    });
  };
  users.associate = (models) => {
    users.hasMany(model.notifications, {
      foriegnKey: 'userId',
      as: 'events'
    });
  };
  return users;
};

export default users;