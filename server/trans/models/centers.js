'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var centers = sequelize.define('centers', {
    centerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sits: {
      type: DataTypes.INTEGER,
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
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return centers;
};
//# sourceMappingURL=centers.js.map