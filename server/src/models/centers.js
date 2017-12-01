import { StringDecoder } from "string_decoder";


module.exports = (sequelize, DataTypes) => {
  var centers = sequelize.define('centers', {
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    location:{
       type:DataTypes.STRING,
       allowNull:false
      },
    cost: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    sits:{
       type:DataTypes.INTEGER,
       allowNull:false
      },
    facilities:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
     }
  });
  centers.associate = (models) => {
  centers.hasMany(models.events, {
      foreignKey: 'eventId',
      as: 'events',
    });
  };
  return centers;
};