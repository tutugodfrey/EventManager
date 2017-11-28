'use strict';
module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define('events', {
    typeOfEvent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfEvent:{
      type: DataTypes.DATE,
      allowNull: false,
      },
    facilities: {
      type: DataTypes.ARRAY[],
      allowNull: false,
    },
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: models => {
        events.belongsTo(models.users, {
          foreignkey : "userId",
          onDelete : "CASCADE",
        });
      }
    }
  });
  return events;
};