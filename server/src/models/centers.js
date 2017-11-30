
module.exports = (sequelize, DataTypes) => {
  var centers = sequelize.define('centers', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    sits: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return centers;
};