// import events from './../models/events';
// import eventCenters from './../models/centers';
// import users from './../models/users'
import models from './../models';
const events = models.events;
const centers = models.centers;
const users = models.users;

const EventsController = class {
  // controller to add event
  addEvent(req, res) {
    const centerId = parseInt(req.params.centerId)
    return centers
    .find({
      where: { 
        id: centerId
      }
    })
    .then(eventCenter => {
      if(!eventCenter){
        return events
        .create({
          typeOfEvent: req.body.typeOfEvent,
          dateOfEvent: req.body.dateOfEvent,
          facilities: req.body.facilities,
          centerId: req.body.centerId,
          userId: req.body.userId
        })
        .then(event => res.status(201).send(event))
      } else {
        res.status(404).send({ message:'Event Center does not exist'});
      }
    })
    .catch(error => res.status(500).send(error));
  }

  // controll to update event
  updateEvent(req, res) {
    const userId = parseInt(req.params.userId)
    return users
    .find({
      where: {
        id: userId
      }
    })
    .then(user => {
      const eventId = parseInt(req.params.eventId)
      if(user){
        return events
        .find({
          where: {
            id: eventId,
            userId:userId
          }
        })
        .then(event => {
          if(event){
            return event
            .update({
              id:eventId,
              typeOfEvent: req.body.typeOfEvent || event[typeOfEvent],
              dateOfEvent: req.body.dateOfEvent || event[dateOfEvent],
              facilities: req.body.facilities || event[facilities],
              centerId: req.body.centerId || event[centerId],
              userId: req.body.userId || event[userId]
            })
            .then(updatedEvent => res.status(201).send(updatedEvent))
            .catch(error => res.status(500).send(error)); 
          } else {
            res.status(404).send({ message: 'You have not added any event'});
          }
        })
        .catch(error => res.status(500).send(error));  
      } else {
        res.status(404).send({ message: 'Your are not a registered user'});
      }
    })
    .catch(error => res.status(500).send(error)); 
  }

  // controller to get all events given the centerId
  getCenterEvents(req, res) {
    const centerId = parseInt(req.params.centerId)
    return centers
    .find({
      where: {
        id: centerId
      }
    })
    .then(eventCenter => {
      const centerId = parseInt(req.params.centerId)
      if(eventCenter){
        return events
        .findAll({
          where: {
            centerId:centerId
          }
        })
        .then(events => {
          if(events){
            res.status(201).send(events);
          } else {
            res.status(404).send({message: 'No event found for this center'})
          }
        })
      }
    })
    .catch(error => res.status(404).send({ message: 'Center does not exist'}));
  }

  // controller to get all events given a userId 
  getUsersEvents(req, res) {
    const userId = parseInt(req.params.userId);
    return users
    .find({
      where: {
        id: userId
      }
    })
    .then(user => {
      if(user){
        return events
        .find({
          where: {
            userId: userId
          }
        })
        .then(userEvents => res.status(200).send(userEvents))
      } else {
        res.status(404).send({ message: 'No event found for this user'});
      }
    })
    .catch(error => res.status(404).send({ message: 'User not found'}));
  }
  // controller to get all events
  getEvents(req, res) {
    return events
    .findAll()
    .then(events => {
      if(events) {
        res.status(200).send(events);
      } else {
        res.status(404).send({message: 'No event found'})
      }
    })
    .catch(error => res.status(500).send())
  } 

   // controller to get an events given the event id
  getEvent(req, res) {
    const eventId = parseInt(req.params.eventId);
    return events
    .find({
      where: {
        id: eventId
      }
    })
    .then(event => {
      if(event){
        res.status(200).send(event);
      } else {
        res.status(404).send({ message: 'Event not found'});
      }
    })
    .catch(error => res.status(500).send(error));
  }

  // controller to delete
  deleteEvent(req, res) {
    const eventId = parseInt(req.params.eventId)
    return events
    .destroy({
      where: {
        id: eventId
      }
    })
    .then(event => res.status(200).send({message: `${event} has ben deleted`}))
    .catch(error => res.status(500).send(error));
  }
};

export default EventsController;
