
import models from './../models';
const events = models.events;
const centers = models.centers;
const users = models.users;

const EventsController = class {
  // controller to add event
  addEvent(req, res) {
    const centerId = parseInt(req.body.centerId);
    return centers
    .find({
      where: { 
        id: centerId
      }
    })
    .then(eventCenter => {
      if(eventCenter){
        return events
        .find({
          where:{
            eventDate:req.body.eventDate,
            centerId:centerId
          }
        })
        .then(eventFound => {
          if(!eventFound){
            const destination = 'req.file.path;'
            // const destination = req.file.path;
            return events
            .create({
              eventType: req.body.eventType,
              eventDate: req.body.eventDate,
              facilities:req.body.facilities,
              imgUrl:destination,
              centerId: parseInt(req.body.centerId),
              userId: parseInt(req.body.userId)
            })
            .then(event => res.status(201).send(event))
            .catch(error => res.status(400).send(error));
          } else{
            res.status(200).send({ message:`An event is already booked you choose. 
            pleasee center the field for upcomming event and centers before choosing you date`});
          }
        })
        .catch(error => res.status(500).send(error));
      }  else {
          res.status(404).send({ message: 'Center not found'})
      }
    })
    .catch(error => res.status(500).send(error));
  }

  // controll to update event
  updateEvent(req, res) {
    const userId = parseInt(req.body.userId);
    const eventId = parseInt(req.params.eventId);
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
            id: eventId,
            userId:userId
          }
        })
        .then(event => {
          if(event){
            return event
            .update({
              eventType: req.body.eventType || event.eventType,
              eventDate: req.body.eventDate || event.eventDate,
              facilities: req.body.facilities || event.facilities,
              imgUrl: req.body.imgUrl || event.imgUrl,
              confirm: req.body.confirm || event.confirm,
              userId: req.body.userId || event.userId,
              centerId: req.body.centerId || event.centerId
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
      if(eventCenter){
        return events
        .findAll({
          where: {
            centerId:centerId
          }
        })
        .then(events => {
          if(events.length > 0){
            res.status(200).send(events);
          } else {
            res.status(404).send({message: 'No event found for this center'})
          }
        })
        .catch(error => res.status(404).send({ message: 'No event found for this center'}));
      } else {
        res.status(404).send({ message: 'Center not found'})
      }
    })
    .catch(error => res.status(404).send(error));
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
        .findAll({
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
    const eventId = parseInt(req.params.eventId);
    const userId = parseInt(req.body.userId);
    return events
    .destroy({
      where: {
        id: eventId,
        userId: userId
      }
    })
    .then(event => res.status(200).send({message: `${event} has ben deleted`}))
    .catch(error => res.status(500).send(error));
  }
};

export default EventsController;
