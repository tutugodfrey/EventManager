'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // controller for users signup and signin


var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

var _HelperFuncts = require('./../funcs/HelperFuncts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const destination = './public/users-photo/';
var users = _models2.default.users;

_dotenv2.default.config();
var UsersController = function () {
  function UsersController() {
    _classCallCheck(this, UsersController);
  }

  _createClass(UsersController, [{
    key: 'signup',

    /* eslint-disable class-methods-use-this, consistent-return */
    // controller for users signup
    value: function signup(req, res) {
      return users.find({
        where: {
          username: req.body.username,
          email: req.body.email
        }
      }).then(function (user) {
        if (!user) {
          // handle uploaded profile pix
          var destination = (0, _HelperFuncts.getImgUrl)(req.file.path);
          var _req$body = req.body,
              passwd1 = _req$body.passwd1,
              passwd2 = _req$body.passwd2;
          // const passwd2 = req.body.passwd2;

          var passwd = void 0;
          if (passwd1 === passwd2) {
            _bcrypt2.default.genSalt(10, function (err, salt) {
              _bcrypt2.default.hash(passwd1, salt, function (hashErr, hash) {
                passwd = hash;
                users.create({
                  password: passwd,
                  fullname: req.body.fullname,
                  email: req.body.email,
                  username: req.body.username,
                  gender: req.body.gender,
                  imgUrl: destination,
                  userType: req.body.userType,
                  securityQtn: req.body.securityQtn,
                  securityAns: req.body.securityAns
                }).then(function (signup) {
                  return res.status(201).send(signup);
                }).catch(function (error) {
                  return res.status(400).send(error);
                });
              });
            });
          } else {
            // password match fail
            return res.status(400).send({ message: 'password does not match' });
          }
        } else {
          // username already exist
          return res.status(200).send({ message: 'user already exist' });
        }
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    // controllers for users signin

  }, {
    key: 'signin',
    value: function signin(req, res) {
      return users.find({
        where: {
          username: req.body.username
        }
      }).then(function (user) {
        if (user) {
          var passwordConfirmed = false;
          var hashedPassword = user.password;
          var password = req.body.password;

          passwordConfirmed = _bcrypt2.default.compareSync(password, hashedPassword);
          if (passwordConfirmed) {
            var authenKey = user.username;
            var token = _jsonwebtoken2.default.sign({ authenKey: authenKey }, process.env.SECRET_KEY, { expiresIn: '48h' });
            res.status(200).send({
              token: token,
              success: true,
              username: user.username,
              userType: user.userType,
              userId: user.id
            });
          } else {
            return res.status(400).send({ message: 'password is not correct' });
          }
        } else {
          return res.status(400).send({ message: 'Your username is not correct' });
        }
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }
    // get user by id

  }, {
    key: 'getUser',
    value: function getUser(req, res) {
      var userId = parseInt(req.params.userId, 10);
      return users.find({
        where: {
          id: userId
        }
      }).then(function (user) {
        if (user) {
          res.status(200).send(user);
        }
        return res.status(404).send({ message: 'User not found' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }
  }, {
    key: 'getUsers',
    value: function getUsers(req, res) {
      return users.findAll().then(function (user) {
        if (user) {
          res.status(200).send(user);
        }
        return res.status(404).send({ message: 'User not found' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }
  }, {
    key: 'updateUsers',
    value: function updateUsers(req, res) {
      var userId = parseInt(req.params.userId, 10);
      return users.find({
        where: {
          id: userId
        }
      }).then(function (user) {
        if (user) {
          return user.update({
            fullname: req.body.fullname || user.fullname,
            username: req.body.username || user.username,
            email: req.body.email || user.email,
            gender: req.body.gender || user.gender,
            imgUrl: req.body.imgUrl || user.imgUrl
          }).then(function (updatedUser) {
            return res.status(201).send(updatedUser);
          }).catch(function (error) {
            return res.status(404).send(error);
          });
        }
        return res.status(404).send({ message: 'user not found' });
      }).catch(function (error) {
        return res.status(404).send(error);
      });
    }

    // delete user by id

  }, {
    key: 'deleteUser',
    value: function deleteUser(req, res) {
      var userId = parseInt(req.params.userId, 10);
      return users.find({
        where: {
          id: userId
        }
      }).then(function (user) {
        if (user) {
          return user.destroy({
            where: {
              id: userId
            }
          }).then(function () {
            return res.status(200).send({ message: user.fullname + ' has been deleted' });
          }).catch(function (error) {
            return res.status(500).send(error);
          });
        }
        return res.status(500).send({ message: 'user not found' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }
  }]);

  return UsersController;
}();
exports.default = UsersController;
//# sourceMappingURL=usersController.js.map