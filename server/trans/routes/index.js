'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import controllers


var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require('./../../../api/swagger/swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _eventCenterController = require('./../controllers/eventCenterController');

var _eventCenterController2 = _interopRequireDefault(_eventCenterController);

var _eventController = require('./../controllers/eventController');

var _eventController2 = _interopRequireDefault(_eventController);

var _usersController = require('./../controllers/usersController');

var _usersController2 = _interopRequireDefault(_usersController);

var _notificationsController = require('./../controllers/notificationsController');

var _notificationsController2 = _interopRequireDefault(_notificationsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
the below is the alternative way to direct upload and multer will generate a random file
name for you without an extentions
const usersDest = './public/users-photo/';
const usersUpload = multer({dest: usersDest});
*/
var UsersStorage = _multer2.default.diskStorage({
  destination: './public/users-photo/',
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var centersStorage = _multer2.default.diskStorage({
  destination: './public/centers-photo/',
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var eventsStorage = _multer2.default.diskStorage({
  destination: './public/events-photo/',
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

var usersUpload = (0, _multer2.default)({ storage: UsersStorage });
var centersUpload = (0, _multer2.default)({ storage: centersStorage });
var eventsUpload = (0, _multer2.default)({ storage: eventsStorage });

_dotenv2.default.config();
var eventCenters = new _eventCenterController2.default();
var events = new _eventController2.default();
var users = new _usersController2.default();
var notifications = new _notificationsController2.default();
var Routes = function () {
  function Routes() {
    _classCallCheck(this, Routes);

    this.users = users;
    this.events = events;
    this.eventCenters = eventCenters;
    this.securedApi = _express2.default.Router();
  }

  _createClass(Routes, [{
    key: 'routes',
    value: function routes(app) {
      app.get('/', function (req, res) {
        res.status(200).sendFile(_path2.default.join(__dirname, './../../../client/index.html'));
      });
      app.use('/api/v1/docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default));

      // route for users signup and signin
      app.post('/api/v1/users/signup', usersUpload.single('userPix'), this.users.signup);
      app.post('/api/v1/users/signin', this.users.signin);
      app.delete('/api/v1/users/:userId', this.users.deleteUser);
      app.get('/api/v1/users', this.users.getUsers);
      app.use('/api/v1/secure', this.securedApi);

      // route controllers for Event Centers
      this.securedApi.use(function (req, res, next) {
        var token = req.body.token || req.headers.token;
        if (token) {
          /* eslint-disable no-unused-vars */
          _jsonwebtoken2.default.verify(token, process.env.SECRET_KEY, function (err, decode) {
            if (err) {
              res.status(500).send('Invalid Token');
            } else {
              next();
            }
          });
        } else {
          res.status(402).send('Please send a token');
        }
      });

      this.securedApi.get('/users/:userId', this.users.getUser);
      this.securedApi.put('/users/:userId', this.users.updateUsers);
      this.securedApi.post('/centers', centersUpload.single('centerPix'), this.eventCenters.addEventCenter);
      this.securedApi.get('/centers', this.eventCenters.getEventCenters);
      this.securedApi.get('/centers/:centerId', this.eventCenters.getEventCenter);
      this.securedApi.get('/centers/centername/:name', eventCenters.getCenterByName);
      this.securedApi.get('/centers/location/:location', eventCenters.getCenterByLocation);
      this.securedApi.put('/centers/:centerId', this.eventCenters.updateEventCenter);
      this.securedApi.delete('/centers/:centerId', this.eventCenters.deleteEventCenter);

      // route controllers for events
      this.securedApi.post('/events', eventsUpload.single('eventPix'), this.events.addEvent);
      this.securedApi.put('/events/:eventId', this.events.updateEvent);
      this.securedApi.get('/events', this.events.getEvents);
      this.securedApi.get('/events/centers/:centerId', this.events.getCenterEvents);
      this.securedApi.get('/events/users/:eventId', this.events.getEvent);
      this.securedApi.delete('/events/:eventId', this.events.deleteEvent);
      this.securedApi.get('/events/:userId', this.events.getUsersEvents);

      // route controllers for notifications
      this.securedApi.post('/notifications', notifications.createNotification);
      this.securedApi.get('/notifications', notifications.getAllNotifications);
      this.securedApi.get('/notifications/:userId', notifications.getNotifications);
    }
  }]);

  return Routes;
}();

exports.default = Routes;
//# sourceMappingURL=index.js.map