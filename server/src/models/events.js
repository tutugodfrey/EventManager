
export default (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    eventType:{
      type: DataTypes.STRING,
      allowNull:false
    },
    eventDate:{
      type:DataTypes.DATE,
      allowNull:false
    },
    facilities:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:true
    },
    imgUrl:{
      type:DataTypes.STRING,
      allowNull:true
     },
    confirm: {
      type:DataTypes.ENUM('pending', true, false),
      defaultValue:'pending'
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