'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var notifications = _models2.default.notifications,
    users = _models2.default.users;

var Notifications = function () {
  function Notifications() {
    _classCallCheck(this, Notifications);
  }

  _createClass(Notifications, [{
    key: 'createNotification',

    /* eslint-disable class-methods-use-this */
    // to post notification to db table as well send an email
    value: function createNotification(req, res) {
      var userType = req.body.userType;

      if (userType === 'admin') {
        var userId = parseInt(req.body.userId, 10);
        console.log(userId);
        var message = req.body.message;

        return users.find({
          where: {
            id: userId,
            userType: 'regular'
          }
        }).then(function (user) {
          if (user) {
            return notifications.create({
              message: message,
              userId: userId
            }).then(function (created) {
              return res.status(201).send(created);
            }).catch(function (error) {
              return res.status(500).send(error);
            });
          }
          return res.status(404).send({ message: 'User not found' });
        }).catch(function (error) {
          return res.status(500).send(error);
        });
      }
      return res.status(402).send({ message: 'Your are not allowed to perform this action' });
    }
  }, {
    key: 'getNotifications',
    value: function getNotifications(req, res) {
      var userId = parseInt(req.params.userId, 10);
      return users.find({
        where: {
          id: userId
        }
      }).then(function (user) {
        if (user) {
          return notifications.findAll({
            where: {
              userId: userId
            }
          }).then(function (allNotifications) {
            return res.status(200).send(allNotifications);
          }).catch(function (error) {
            res.status(404).send({
              error: error,
              message: 'No new notification'
            });
          });
        }
        return res.status(404).send({ message: 'Not a registered user' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }
    // get all notification

  }, {
    key: 'getAllNotifications',
    value: function getAllNotifications(req, res) {
      return notifications.all().then(function (allNotifications) {
        return res.status(200).send(allNotifications);
      }).catch(function (error) {
        res.status(404).send({
          error: error,
          message: 'No new notification'
        });
      });
    }
  }]);

  return Notifications;
}();
exports.default = Notifications;
//# sourceMappingURL=notificationsController.js.map