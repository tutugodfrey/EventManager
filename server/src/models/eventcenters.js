'use strict';
module.exports = function(sequelize, DataTypes) {
  var eventCenters = sequelize.define('eventCenters', {
    centerName:{
      type: DataTypes.STRING,
      allowNull: false,e
      },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sits: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost:{
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    facilities: {
      type: DataTypes.ARRAY[],
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: models => {
        eventCenters.hasMany(models.events, {
          foreignkey : "centerId",
          onDelete : "CASCADE",
        });
      }
    }
  });
  return eventCenters;
};