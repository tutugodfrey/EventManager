'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import controllers


var _eventCenterController = require('./../controllers/eventCenterController');

var _eventCenterController2 = _interopRequireDefault(_eventCenterController);

var _eventController = require('./../controllers/eventController');

var _eventController2 = _interopRequireDefault(_eventController);

var _usersController = require('./../controllers/usersController');

var _usersController2 = _interopRequireDefault(_usersController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventCenter = new _eventCenterController2.default();
var events = new _eventController2.default();
var users = new _usersController2.default();
var Routes = function () {
  function Routes() {
    _classCallCheck(this, Routes);
  }

  _createClass(Routes, [{
    key: 'routes',
    value: function routes(app) {
      app.get('/', function (req, res) {
        res.status(200).send('Welcom to Eventmanager');
      });

      // route for users signup and signin
      app.post('/api/signup', users.signup);
      app.post('/api/signin', users.signin);

      // route controllers for Event Centers
      app.post('/api/centers', eventCenter.addEventCenter);
      app.get('/api/centers', eventCenter.getEventCenters);
      app.get('/api/centers/:centerId', eventCenter.getEventCenter);
      app.get('/api/centers/name/:centerName', eventCenter.getCenterByName);
      app.put('/api/centers/:centerId', eventCenter.updateEventCenter);

      // route controllers for events
      app.post('/api/events', events.addEvent);
      app.put('/api/events/:eventId', events.updateEvent);
      app.get('/api/events', events.getEvents);
      app.get('/api/events/centers/:centerId', events.getCenterEvents);
      app.get('/api/events/users/:eventId', events.getEvent);
      app.delete('/api/events/:eventId', events.deleteEvent);
      app.get('/api/events/:ownerId', events.getUsersEvents);
    }
  }]);

  return Routes;
}();

exports.default = Routes;
//# sourceMappingURL=index.js.map