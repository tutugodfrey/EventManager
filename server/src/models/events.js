
export default (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
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
      allowNull:true
   },
    centerId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  });
  return events;
};