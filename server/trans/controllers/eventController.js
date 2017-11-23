'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventsModel = require('./../models/eventsModel');

var _eventsModel2 = _interopRequireDefault(_eventsModel);

var _eventCentersModel = require('./../models/eventCentersModel');

var _eventCentersModel2 = _interopRequireDefault(_eventCentersModel);

var _funcs = require('./../funcs/funcs');

var _funcs2 = _interopRequireDefault(_funcs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import EventCenterController from './'
var functs = new _funcs2.default();

var EventsController = function () {
  function EventsController() {
    _classCallCheck(this, EventsController);

    this.events = _eventsModel2.default;
  }

  // controller to add event


  _createClass(EventsController, [{
    key: 'addEvent',
    value: function addEvent(req, res) {
      var id = functs.getId(_eventsModel2.default);
      var newEvent = {
        id: id,
        centerName: req.body.centerName,
        location: req.body.location,
        facilities: req.body.facilities,
        typeOfEvent: req.body.typeOfEvent,
        dateOfEvent: req.body.cost,
        centerId: req.body.centerId,
        ownerId: req.body.ownerId
      };
      _eventsModel2.default.push(newEvent);
      res.status(201).send(newEvent);
    }

    // controll to update event

  }, {
    key: 'updateEvent',
    value: function updateEvent(req, res) {
      var eventId = parseInt(req.params.eventId);
      var getEventId = functs.verifyId(_eventsModel2.default, eventId);
      var newEvent = void 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _eventsModel2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var event = _step.value;

          if (event.id === eventId) {
            var id = eventId;
            var centerName = req.body.centerId || event[centerName];
            var location = req.body.location || event[location];
            var facilities = req.body.facilities || event[facilities];
            var typeOfEvent = req.body.typeOfEvent || event[typeOfEvent];
            var dateOfEvent = req.body.dateOfEvent || event[dateOfEvent];
            var centerId = req.body.centerId || event[centerId];
            var ownerId = req.body.ownerId || event[ownerId];
            newEvent = {
              id: id,
              centerName: centerName,
              location: location,
              facilities: facilities,
              typeOfEvent: typeOfEvent,
              dateOfEvent: dateOfEvent,
              centerId: centerId,
              ownerId: ownerId
            };
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var eventPos = _eventsModel2.default.indexOf(newEvent);
      if (_eventsModel2.default[eventPos] = newEvent) {
        res.status(200).send(newEvent);
      } else {
        res.status(404).send('Not Found: no action taken');
      }
    }

    // controller to get an event

  }, {
    key: 'getEvents',
    value: function getEvents(req, res) {
      var ownerId = req.params.ownerId;
      var eventCollector = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _eventsModel2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var event = _step2.value;

          if (event[ownerId] === ownerId) {
            eventCollector.push(event);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (eventCollector.length >= 1) {
        res.status(200).send(eventCollector);
      } else {
        res.status(404).send('Not Found');
      }
    }

    // controller to delete

  }, {
    key: 'deleteEvent',
    value: function deleteEvent(req, res) {
      var eventId = req.body.eventId;
      var getEventId = functs.verifyId(_eventsModel2.default, eventId);
      var eventPos = void 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = _eventsModel2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var event = _step3.value;

          if (event[getEventId] === eventId) {
            eventPos = _eventsModel2.default.indexOf(event);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (eventPos) {
        delete _eventsModel2.default[eventPos];
        res.status(200).send('deleted');
      } else {
        res.status(404).send('Not Found: no action taken');
      }
    }
  }]);

  return EventsController;
}();

exports.default = EventsController;
//# sourceMappingURL=eventController.js.map