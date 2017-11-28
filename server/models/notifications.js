'use strict';
module.exports = function(sequelize, DataTypes) {
  var notifications = sequelize.define('notifications', {
    message:{
      type: DataTypes.STRING,
      allowNull: false,
      },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: models => {
        notifications.belongsTo(models.users, {
          foreignkey : "notificationId",
          onDelete : "CASCADE",
        });
      }
    }
  });
  return notifications;
};