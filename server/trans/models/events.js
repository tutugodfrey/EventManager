'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var events = sequelize.define('events', {
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    facilities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    confirm: {
      type: DataTypes.ENUM('pending', true, false),
      defaultValue: 'pending'
    },
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return events;
};
//# sourceMappingURL=events.js.map