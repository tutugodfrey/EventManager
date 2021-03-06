'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    securityQtn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    securityAns: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userType: {
      type: DataTypes.ENUM('admin', 'regular')
    }
  });
  return users;
};
//# sourceMappingURL=users.js.map