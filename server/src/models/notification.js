'use strict';
module.exports = (sequelize, DataTypes) => {
  var notification = sequelize.define('notification', {
    message:{
      type: DataTypes.TEXT,
      allowNull:false
    }
  });
  notification.associate = (models) => {
    notification.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'users',
      });
    };
  return notification;
};