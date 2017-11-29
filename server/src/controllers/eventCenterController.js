
import events from './../models/eventsModel';
import eventCenters from './../models/eventCentersModel';
import Functs from './../funcs/funcs';
// import EventCenterController from './'
const functs = new Functs();

const EventCenterController = class {
  constructor() {
    this.eventCenters = eventCenters;
  }
  // add a new event center
  addEventCenter(req, res) {
    return eventCenters
    .find(
      {
        where: req.body.centerName
      }
    )
    .then(eventCenter => {
      if(!eventCenter){
        return eventCenter
        .create({
          centerName: req.body.centerName,
          location:req.body.location,
          sits: req.body.sits,
          cost: req.body.cost,
          facilities: req.body.facilities
        })
        .then(eventCenter => res.status(201).send(eventCenter))
      }
    })
    .catch(error => res.status(404).send({
      message:'A center with this already exist'
    }))
  }
  //  return all event centers
  getEventCenters(req, res) {
    return eventCenters
    .findAll()
    then(eventCenters => {
      if(eventCenters){
        res.status(200).send(eventCenters)
      }
    })
    .catch(error => res.status(404).send({
      message: 'No event center found'
    }))
  }
  // an event center given its it id is present
  getEventCenter(req, res) {
    return eventCenters
    .findById(
      {
        where: req.params.id
      }
    )
    .then(eventCenter => {
      if(eventCenter){
        res.status(200).send(eventCenter);
      }
    } )
    .catch(error => res.status(204).send({
      message: 'No center is found matching this Id'
    }))
  }

  // get an event center by name
  getCenterByName(req, res) {
    return eventCenters
    .find(
      {
        where: req.params.centerName
      }
    )
    .then(eventCenter => {
      if(eventCenter){
        res.status(200).send(eventCenter);
      }
    } )
    .catch(error => res.status(204).send({
      message: 'No center is found matching this Id'
    }))
  }
   // get an event center by location
   getCenterByLocation(req, res) {
    return eventCenters
    .find(
      {
        where: req.params.location
      }
    )
    .then(eventCenters => {
      if(eventCenters){
        res.status(200).send(eventCenters);
      }
    } )
    .catch(error => res.status(204).send({
      message: 'No center is found matching this Id'
    }))
  }

  updateEventCenter(req, res) {
    return eventCenters
    .findById(
      {
        where: req.body.id
      }
    )
    .then(eventCenter => {
      if(eventCenter){
        return eventCenter
        .update({
          centerName: req.body.centerName || eventCenter.centerName,
          location:req.body.location || eventCenter.location,
          sits: req.body.sits || eventCenter.sits,
          cost: req.body.cost || eventCenter.cost,
          facilities: req.body.facilities || eventCenter.facilities
        })
        .then(updatedCenter => {
          res.status(201).send(updatedCenter)
        })
      } else {
        res.status(404).send({message: 'Event center not found'});
      }
    })
    .catch(error => {
      res.status(500).send(error)
    })
  }
};
export default EventCenterController;
