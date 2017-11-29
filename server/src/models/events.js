
const events= (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    typeOfEvent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfEvent:{
      type: DataTypes.DATE,
      allowNull: false,
      },
    facilities: {
      type: DataTypes.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  
  events.associate = (models) => {
    events.belongsTo(models.eventCenters, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
  };
  events.associate = (models) => {
    events.hasOne(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return events;
};

export default events;