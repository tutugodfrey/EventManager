'use strict';
module.exports = (sequelize, DataTypes) => {
  var events = sequelize.define('events', {
    type:{
      type: DataTypes.STRING,
      allowNull:false
      },
    date:{
       type:DataTypes.DATE,
       allowNull:false
    },
    facilities:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    }
  });
  events.associate = (models) => {
    events.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    events.belongsTo(models.centers, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',
    });
  };
  return events;
};