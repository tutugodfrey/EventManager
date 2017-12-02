
export default (sequelize, DataTypes) => {
  const  notifications = sequelize.define('notifications', {
    message:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  });
  return notifications;
};