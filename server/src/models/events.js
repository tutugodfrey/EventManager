'use strict';
module.exports = (sequelize, DataTypes) => {
  var events = sequelize.define('events', {
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    centerid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return events;
};