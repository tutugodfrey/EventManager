
const eventCenters = (sequelize, DataTypes) => {
  const eventCenters = sequelize.define('eventCenters', {
    centerName:{
      type: DataTypes.STRING,
      allowNull: false,e
      },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sits: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    centerImgUrl:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    facilities: {
      type: DataTypes.ARRAY(Sequelize.STRING),
      allowNull: false,
    }
  });
  eventCenters.associate = (models) => {
    eventCenters.hasMany(models.events, {
      foreignKey: 'centerId',
      as: 'events'
    });
  };
  return eventCenters;
};
export default eventCenters;