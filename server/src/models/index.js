import dotenv from 'dotenv';
import fs   from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
dotenv.config();
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
// const env = process.env.TEST;
// json file not transpiled by babel redirector out of the src dir
const config    = require(path.join(__dirname, '../..', 'config', 'config.json'))[env];

const db        = {};
let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else { 
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default  db;
