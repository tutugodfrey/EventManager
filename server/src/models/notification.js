
export default (sequelize, DataTypes) => {
  const  notification = sequelize.define('notification', {
    message:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  });
  return notification;
};