

export default  (sequelize, DataTypes) => {
  const centers = sequelize.define('centers', {
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
      type:DataTypes.STRING,
      allowNull:false
     }
  });
 
  return centers;
};