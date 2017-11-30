'use strict';
module.exports = (sequelize, DataTypes) => {
  var notification = sequelize.define('notification', {
    message: DataTypes.TEXT,
    userid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return notification;
};