import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

dotenv.config();
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
/* eslint-disable import/no-dynamic-require */
const config = require(path.join(__dirname, '../..', 'config', 'config.json'))[env];
/* eslint-disable no-console */
console.log(env);
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: 'postgres',
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: 'postgres',
  });
}
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    /* eslint-disable dot-notation */
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
