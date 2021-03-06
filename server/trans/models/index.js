'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var basename = _path2.default.basename(__filename);
var env = process.env.NODE_ENV || 'development';
/* eslint-disable import/no-dynamic-require */
var config = require(_path2.default.join(__dirname, '../..', 'config', 'config.json'))[env];
/* eslint-disable no-console */
console.log(env);
var db = {};
var sequelize = void 0;
if (config.use_env_variable) {
  sequelize = new _sequelize2.default(process.env[config.use_env_variable], {
    dialect: 'mysql'
  });
} else {
  sequelize = new _sequelize2.default(config.database, config.username, config.password, {
    dialect: 'postgres'
  });
}
_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  /* eslint-disable dot-notation */
  var model = sequelize['import'](_path2.default.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;
exports.default = db;
//# sourceMappingURL=index.js.map