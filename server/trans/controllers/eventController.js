'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

var _HelperFuncts = require('./../funcs/HelperFuncts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var events = _models2.default.events,
    centers = _models2.default.centers,
    users = _models2.default.users;

var EventsController = function () {
  function EventsController() {
    _classCallCheck(this, EventsController);
  }

  _createClass(EventsController, [{
    key: 'addEvent',

    /* eslint-disable class-methods-use-this */
    // controller to add event
    value: function addEvent(req, res) {
      var centerId = parseInt(req.body.centerId, 10);
      return centers.find({
        where: {
          id: centerId
        }
      }).then(function (eventCenter) {
        if (eventCenter) {
          return events.find({
            where: {
              centerId: centerId,
              eventDate: req.body.eventDate
            }
          }).then(function (eventFound) {
            if (!eventFound) {
              // const destination = 'req.file.path;'
              var destination = (0, _HelperFuncts.getImgUrl)(req.file.path);
              return events.create({
                eventType: req.body.eventType,
                eventDate: req.body.eventDate,
                facilities: req.body.facilities,
                imgUrl: destination,
                centerId: parseInt(req.body.centerId, 10),
                userId: parseInt(req.body.userId, 10)
              }).then(function (event) {
                return res.status(201).send(event);
              }).catch(function (error) {
                return res.status(400).send(error);
              });
            }
            return res.status(200).send({
              message: 'An event is already booked you choose. \n                pleasee center the field for upcomming event and centers before choosing you date'
            });
          }).catch(function (error) {
            return res.status(500).send(error);
          });
        }
        return res.status(404).send({ message: 'Center not found' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    // controll to update event

  }, {
    key: 'updateEvent',
    value: function updateEvent(req, res) {
      var userId = parseInt(req.body.userId, 10);
      var eventId = parseInt(req.params.eventId, 10);
      return users.find({
        where: {
          id: userId
        }
      }).then(function (user) {
        if (user) {
          return events.find({
            where: {
              userId: userId,
              id: eventId
            }
          }).then(function (event) {
            if (event) {
              return event.update({
                eventType: req.body.eventType || event.eventType,
                eventDate: req.body.eventDate || event.eventDate,
                facilities: req.body.facilities || event.facilities,
                imgUrl: req.body.imgUrl || event.imgUrl,
                confirm: req.body.confirm || event.confirm,
                userId: req.body.userId || event.userId,
                centerId: req.body.centerId || event.centerId
              }).then(function (updatedEvent) {
                return res.status(201).send(updatedEvent);
              }).catch(function (error) {
                return res.status(500).send(error);
              });
            }
            return res.status(404).send({ message: 'You have not added any event' });
          }).catch(function (error) {
            return res.status(500).send(error);
          });
        }
        return res.status(404).send({ message: 'Your are not a registered user' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    // controller to get all events given the centerId

  }, {
    key: 'getCenterEvents',
    value: function getCenterEvents(req, res) {
      var centerId = parseInt(req.params.centerId, 10);
      return centers.find({
        where: {
          id: centerId
        }
      }).then(function (eventCenter) {
        if (eventCenter) {
          return events.findAll({
            where: {
              centerId: centerId
            }
          }).then(function (centerEvents) {
            if (centerEvents.length > 0) {
              res.status(200).send(centerEvents);
            }
            return res.status(404).send({ message: 'No event found for this center' });
          }).catch(function (error) {
            res.status(404).send({
              error: error,
              message: 'No event found for this center'
            });
          });
        }
        return res.status(404).send({ message: 'Center not found' });
      }).catch(function (error) {
        return res.status(404).send(error);
      });
    }
    // controller to get all events given a userId

  }, {
    key: 'getUsersEvents',
    value: function getUsersEvents(req, res) {
      var userId = parseInt(req.params.userId, 10);
      return users.find({
        where: {
          id: userId
        }
      }).then(function (user) {
        if (user) {
          return events.findAll({
            where: {
              userId: userId
            }
          }).then(function (userEvents) {
            return res.status(200).send(userEvents);
          }).catch(function (error) {
            return res.status(404).send(error);
          });
        }
        return res.status(404).send({ message: 'No event found for this user' });
      }).catch(function (error) {
        res.status(404).send({
          error: error,
          message: 'User not found'
        });
      });
    }
    // controller to get all events

  }, {
    key: 'getEvents',
    value: function getEvents(req, res) {
      return events.findAll().then(function (allEvents) {
        if (allEvents) {
          res.status(200).send(allEvents);
        }
        return res.status(404).send({ message: 'No event found' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    // controller to get an events given the event id

  }, {
    key: 'getEvent',
    value: function getEvent(req, res) {
      var eventId = parseInt(req.params.eventId, 10);
      return events.find({
        where: {
          id: eventId
        }
      }).then(function (event) {
        if (event) {
          res.status(200).send(event);
        }
        return res.status(404).send({ message: 'Event not found' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    // controller to delete

  }, {
    key: 'deleteEvent',
    value: function deleteEvent(req, res) {
      var eventId = parseInt(req.params.eventId, 10);
      var userId = parseInt(req.body.userId, 10);
      return events.destroy({
        where: {
          userId: userId,
          id: eventId
        }
      }).then(function (event) {
        return res.status(200).send({ message: event + ' has ben deleted' });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }
  }]);

  return EventsController;
}();

exports.default = EventsController;
//# sourceMappingURL=eventController.js.map