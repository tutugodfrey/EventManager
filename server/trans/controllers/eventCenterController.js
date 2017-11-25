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

var EventCenterController = function () {
  function EventCenterController() {
    _classCallCheck(this, EventCenterController);

    this.eventCenters = _eventCentersModel2.default;
  }
  // add a new event center


  _createClass(EventCenterController, [{
    key: 'addEventCenter',
    value: function addEventCenter(req, res) {
      var centerId = functs.getField(_eventCentersModel2.default, 'centerId') + 1;
      var newEventCenter = {
        centerId: centerId,
        centerName: req.body.centerName,
        location: req.body.location,
        facilities: req.body.facilities,
        cost: req.body.cost
      };
      _eventCentersModel2.default.push(newEventCenter);
      res.status(201).send(newEventCenter);
    }
    //  return all event centers

  }, {
    key: 'getEventCenters',
    value: function getEventCenters(req, res) {
      res.status(200).send(_eventCentersModel2.default);
    }
    // an event center given its it id is present

  }, {
    key: 'getEventCenter',
    value: function getEventCenter(req, res) {
      var centerId = parseInt(req.params.centerId);
      // const getEventCenter = functs.getObject(eventCenters, centerId);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _eventCentersModel2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var eventCenter = _step.value;

          if (eventCenter['centerId'] === centerId) {
            // centerCollector = eventCenter
            res.status(200).send(eventCenter);
            break;
          }
        }
        //  if(eventCenterCollector.length > 0){
        //    res.status(200).send(eventCenterCollector)
        //  } else {
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

      res.status(404).send('Center not Found');
      //  }
    }
  }, {
    key: 'updateEventCenter',
    value: function updateEventCenter(req, res) {
      var centerId = parseInt(req.params.centerId);
      // const getEventCenterId = functs.getObject(eventCenters, 'centerId');
      var newEventCenter = void 0;
      var centerHolder = void 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _eventCentersModel2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var eventCenter = _step2.value;

          if (eventCenter['centerId'] === centerId) {
            centerHolder = eventCenter;
            var centerName = req.body.centerName || eventCenter[centerName];
            var location = req.body.location || eventCenter[location];
            var facilities = req.body.facilities || eventCenter[facilities];
            var cost = req.body.cost || eventCenter[cost];
            newEventCenter = {
              centerId: centerId,
              centerName: centerName,
              facilities: facilities,
              cost: cost,
              location: location
            };
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

      var eventCenterPos = _eventCentersModel2.default.indexOf(centerHolder);
      if (_eventCentersModel2.default[eventCenterPos] = newEventCenter) {
        res.status(200).send(newEventCenter);
      } else {
        res.status(404).send('Not Found');
      }
    }
  }]);

  return EventCenterController;
}();
exports.default = EventCenterController;
//# sourceMappingURL=eventCenterController.js.map