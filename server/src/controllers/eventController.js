
import models from './../models';
import { getImgUrl } from './../funcs/HelperFuncts';

const { events, centers, users } = models;
const EventsController = class {
  /* eslint-disable class-methods-use-this */
  // controller to add event
  addEvent(req, res) {
    const centerId = parseInt(req.body.centerId, 10);
    return centers
      .find({
        where: {
          id: centerId,
        },
      })
      .then((eventCenter) => {
        if (eventCenter) {
          return events
            .find({
              where: {
                centerId,
                eventDate: req.body.eventDate,
              },
            })
            .then((eventFound) => {
              if (!eventFound) {
                // const destination = 'req.file.path;'
                const destination = getImgUrl(req.file.path);
                return events
                  .create({
                    eventType: req.body.eventType,
                    eventDate: req.body.eventDate,
                    facilities: req.body.facilities,
                    imgUrl: destination,
                    centerId: parseInt(req.body.centerId, 10),
                    userId: parseInt(req.body.userId, 10),
                  })
                  .then(event => res.status(201).send(event))
                  .catch(error => res.status(400).send(error));
              }
              return res.status(200).send({
                message: `An event is already booked you choose. 
                pleasee center the field for upcomming event and centers before choosing you date`,
              });
            })
            .catch(error => res.status(500).send(error));
        }
        return res.status(404).send({ message: 'Center not found' });
      })
      .catch(error => res.status(500).send(error));
  }

  // controll to update event
  updateEvent(req, res) {
    const userId = parseInt(req.body.userId, 10);
    const eventId = parseInt(req.params.eventId, 10);
    return users
      .find({
        where: {
          id: userId,
        },
      })
      .then((user) => {
        if (user) {
          return events
            .find({
              where: {
                userId,
                id: eventId,
              },
            })
            .then((event) => {
              if (event) {
                return event
                  .update({
                    eventType: req.body.eventType || event.eventType,
                    eventDate: req.body.eventDate || event.eventDate,
                    facilities: req.body.facilities || event.facilities,
                    imgUrl: req.body.imgUrl || event.imgUrl,
                    confirm: req.body.confirm || event.confirm,
                    userId: req.body.userId || event.userId,
                    centerId: req.body.centerId || event.centerId,
                  })
                  .then(updatedEvent => res.status(201).send(updatedEvent))
                  .catch(error => res.status(500).send(error));
              }
              return res.status(404).send({ message: 'You have not added any event' });
            })
            .catch(error => res.status(500).send(error));
        }
        return res.status(404).send({ message: 'Your are not a registered user' });
      })
      .catch(error => res.status(500).send(error));
  }

  // controller to get all events given the centerId
  getCenterEvents(req, res) {
    const centerId = parseInt(req.params.centerId, 10);
    return centers
      .find({
        where: {
          id: centerId,
        },
      })
      .then((eventCenter) => {
        if (eventCenter) {
          return events
            .findAll({
              where: {
                centerId,
              },
            })
            .then((centerEvents) => {
              if (centerEvents.length > 0) {
                res.status(200).send(centerEvents);
              }
              return res.status(404).send({ message: 'No event found for this center' });
            })
            .catch((error) => {
              res.status(404).send({
                error,
                message: 'No event found for this center',
              });
            });
        }
        return res.status(404).send({ message: 'Center not found' });
      })
      .catch(error => res.status(404).send(error));
  }
  // controller to get all events given a userId
  getUsersEvents(req, res) {
    const userId = parseInt(req.params.userId, 10);
    return users
      .find({
        where: {
          id: userId,
        },
      })
      .then((user) => {
        if (user) {
          return events
            .findAll({
              where: {
                userId,
              },
            })
            .then(userEvents => res.status(200).send(userEvents))
            .catch(error => res.status(404).send(error));
        }
        return res.status(404).send({ message: 'No event found for this user' });
      })
      .catch((error) => {
        res.status(404).send({
          error,
          message: 'User not found',
        });
      });
  }
  // controller to get all events
  getEvents(req, res) {
    return events
      .findAll()
      .then((allEvents) => {
        if (allEvents) {
          res.status(200).send(allEvents);
        }
        return res.status(404).send({ message: 'No event found' });
      })
      .catch(error => res.status(500).send(error));
  }

  // controller to get an events given the event id
  getEvent(req, res) {
    const eventId = parseInt(req.params.eventId, 10);
    return events
      .find({
        where: {
          id: eventId,
        },
      })
      .then((event) => {
        if (event) {
          res.status(200).send(event);
        }
        return res.status(404).send({ message: 'Event not found' });
      })
      .catch(error => res.status(500).send(error));
  }

  // controller to delete
  deleteEvent(req, res) {
    const eventId = parseInt(req.params.eventId, 10);
    const userId = parseInt(req.body.userId, 10);
    return events
      .destroy({
        where: {
          userId,
          id: eventId,
        },
      })
      .then(event => res.status(200).send({ message: `${event} has ben deleted` }))
      .catch(error => res.status(500).send(error));
  }
};

export default EventsController;
