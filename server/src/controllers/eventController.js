import events from './../models/events';
import eventCenters from './../models/centers';
import users from './../models/users'

const EventsController = class {
  // controller to add event
  addEvent(req, res) {
    return eventCenters
    .findById({
      where: { 
        id: req.body.centerId
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
    return events
    .findById({
      where: {
        id: res.params.id
      }
    })
    .then(event => {
      return event
      .update({
        id,
        typeOfEvent: req.body.typeOfEvent || event[typeOfEvent],
        dateOfEvent: req.body.dateOfEvent || event[dateOfEvent],
        facilities: req.body.facilities || event[facilities],
        centerId: req.body.centerId || event[centerId],
        userId: req.body.userId || event[userId]
      })
      .then(updatedEvent => res.status(201).send(updatedEvent))
    })
    .catch(error => res.status(500).send(error)); 
  }

  // controller to get all events given the centerId
  getCenterEvents(req, res) {
    return eventCenters
    .findById({
      where: {
        id: req.params.centerId
      }
    })
    .then(eventCenter => {
      if(eventCenter){
        return events
        .find({
          where: {
            centerId: req.params.centerId
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
    return users
    .findById({
      where: {
        id: req.params.userId
      }
    })
    .then(user => {
      if(user){
        return events
        .find({
          where: {
            userId: req.params.userId
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
    return events
    .findById({
      where: {
        id: res.params.eventId
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
    return events
    .destroy({
      where: {
        id: req.params.eventId
      }
    })
    .then(event => res.status(200).send({message: `${event} has ben deleted`}))
    .catch(error => res.status(500).send(error));
  }
};

export default EventsController;
