
const notifications = (sequelize, DataTypes) => {
  const notifications = sequelize.define('notifications', {
    message:{
      type: DataTypes.STRING,
      allowNull: false,
      },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
  notifications.associate = (models) => {
    notifications.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'users'
    });
  };
  return notifications;
};

export default notifications;