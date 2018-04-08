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
            // const destination = 'path-to-photo';
            return centers.create({
              centerName: req.body.centerName,
              location: req.body.location,
              sits: parseInt(req.body.sits),
              cost: parseInt(req.body.cost),
              facilities: req.body.facilities,
              imgUrl: destination,
              userId: parseInt(req.body.userId)
            }).then(function (center) {
              return res.status(201).send(center);
            }).catch(function (error) {
              return res.status(400).send(error);
            });
          } else {
            res.status(200).send({ message: 'a center with this name already exist' });
          }
        }).catch(function (error) {
          return res.status(404).send({ message: 'something went wrong' });
        });
      } else {
        res.status(402).send({ message: 'You are not allowed to perform this action' });
      }
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
        return res.status(404).send({ message: 'No event center found' });
      });
    }

    // an event center given its it id is present

  }, {
    key: 'getEventCenter',
    value: function getEventCenter(req, res) {
      var centerId = parseInt(req.params.centerId);
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
          res.status(200).send(eventCenter);
        } else {
          res.status(404).send({ message: 'No center found for this name' });
        }
      }).catch(function (error) {
        return res.status(204).send({
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
          message: 'No center is found matching this Id'
        });
      });
    }
  }, {
    key: 'updateEventCenter',
    value: function updateEventCenter(req, res) {
      if (req.body.userType === 'admin') {
        var centerId = parseInt(req.params.centerId);
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
              res.status(201).send(updatedCenter);
            });
          } else {
            res.status(404).send({ message: 'Event center not found' });
          }
        }).catch(function (error) {
          res.status(500).send(error);
        });
      } else {
        res.status(402).send({ message: 'You are allowed to perform this action' });
      }
    }
  }, {
    key: 'deleteEventCenter',
    value: function deleteEventCenter(req, res) {
      if (req.body.userType === 'admin') {
        var centerId = parseInt(req.params.centerId);
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
            }).then(function (updatedCenter) {
              res.status(200).send({ message: 'center has been deleted' });
            });
          } else {
            res.status(404).send({ message: 'Event center not found' });
          }
        }).catch(function (error) {
          res.status(500).send(error);
        });
      } else {
        res.status(402).send({ message: 'You are allowed to perform this action' });
      }
    }
  }]);

  return EventCenterController;
}();
exports.default = EventCenterController;
//# sourceMappingURL=eventCenterController.js.map