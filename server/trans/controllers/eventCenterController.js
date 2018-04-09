'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

var _HelperFuncts = require('./..//funcs/HelperFuncts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var centers = _models2.default.centers;

var EventCenterController = function () {
  function EventCenterController() {
    _classCallCheck(this, EventCenterController);
  }

  _createClass(EventCenterController, [{
    key: 'addEventCenter',

    /* eslint-disable class-methods-use-this */
    // add a new event center
    value: function addEventCenter(req, res) {
      if (req.body.userType === 'admin') {
        return centers.find({
          where: {
            centerName: req.body.centerName,
            location: req.body.location
          }
        }).then(function (eventCenter) {
          if (!eventCenter) {
            var destination = (0, _HelperFuncts.getImgUrl)(req.file.path);
            return centers.create({
              centerName: req.body.centerName,
              location: req.body.location,
              sits: parseInt(req.body.sits, 10),
              cost: parseInt(req.body.cost, 10),
              facilities: req.body.facilities,
              imgUrl: destination,
              userId: parseInt(req.body.userId, 10)
            }).then(function (center) {
              return res.status(201).send(center);
            }).catch(function (error) {
              return res.status(400).send(error);
            });
          }
          return res.status(200).send({ message: 'a center with this name already exist' });
        }).catch(function (error) {
          return res.status(404).send(error);
        });
      }
      return res.status(402).send({ message: 'You are not allowed to perform this action' });
    }

    //  return all event centers

  }, {
    key: 'getEventCenters',
    value: function getEventCenters(req, res) {
      return centers.findAll().then(function (eventCenter) {
        if (eventCenter) {
          res.status(200).send(eventCenter);
        }
      }).catch(function (error) {
        return res.status(404).send({
          error: error,
          message: 'No event center found'
        });
      });
    }

    // an event center given its it id is present

  }, {
    key: 'getEventCenter',
    value: function getEventCenter(req, res) {
      var centerId = parseInt(req.params.centerId, 10);
      return centers.find({
        where: {
          id: centerId
        }
      }).then(function (eventCenter) {
        if (eventCenter) {
          res.status(200).send(eventCenter);
        }
      }).catch(function (error) {
        return res.status(404).send({
          error: error,
          message: 'No center is found matching this Id'
        });
      });
    }

    // get an event center by name

  }, {
    key: 'getCenterByName',
    value: function getCenterByName(req, res) {
      return centers.find({
        where: {
          name: req.params.name
        }
      }).then(function (eventCenter) {
        if (eventCenter) {
          return res.status(200).send(eventCenter);
        }
        return res.status(404).send({ message: 'No center found for this name' });
      }).catch(function (error) {
        return res.status(204).send({
          error: error,
          message: 'No center is found matching this Id'
        });
      });
    }
    // get an event center by location

  }, {
    key: 'getCenterByLocation',
    value: function getCenterByLocation(req, res) {
      return centers.find({
        where: {
          location: req.params.location
        }
      }).then(function (eventCenters) {
        if (eventCenters) {
          res.status(200).send(eventCenters);
        }
      }).catch(function (error) {
        return res.status(204).send({
          error: error,
          message: 'No center is found matching this Id'
        });
      });
    }
  }, {
    key: 'updateEventCenter',
    value: function updateEventCenter(req, res) {
      if (req.body.userType === 'admin') {
        var centerId = parseInt(req.params.centerId, 10);
        return centers.find({
          where: {
            id: centerId
          }
        }).then(function (eventCenter) {
          if (eventCenter) {
            return eventCenter.update({
              centerName: req.body.centerName || eventCenter.centerName,
              location: req.body.location || eventCenter.location,
              sits: req.body.sits || eventCenter.sits,
              cost: req.body.cost || eventCenter.cost,
              facilities: req.body.facilities || eventCenter.facilities
            }).then(function (updatedCenter) {
              return res.status(201).send(updatedCenter);
            }).catch(function () {
              return res.status(404).send({ message: 'update fail' });
            });
          }
          return res.status(404).send({ message: 'Event center not found' });
        }).catch(function (error) {
          return res.status(500).send(error);
        });
      }
      return res.status(404).send({ message: 'Event center not found' });
    }
  }, {
    key: 'deleteEventCenter',
    value: function deleteEventCenter(req, res) {
      if (req.body.userType === 'admin') {
        var centerId = parseInt(req.params.centerId, 10);
        return centers.find({
          where: {
            id: centerId
          }
        }).then(function (eventCenter) {
          if (eventCenter) {
            return eventCenter.destroy({
              where: {
                id: centerId
              }
            }).then(function () {
              return res.status(200).send({ message: 'center has been deleted' });
            });
          }
          return res.status(404).send({ message: 'center not found' });
        }).catch(function (error) {
          return res.status(500).send(error);
        });
      }
      return res.status(404).send({ message: 'you are not allowed to perform this action' });
    }
  }]);

  return EventCenterController;
}();
exports.default = EventCenterController;
//# sourceMappingURL=eventCenterController.js.map