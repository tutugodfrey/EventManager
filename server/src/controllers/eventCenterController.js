
import models from './../models';

const centers = models.centers;

const EventCenterController = class {
  // add a new event center
  addEventCenter(req, res) {
    return centers
    .find(
      {
        where: {
          name: req.body.name
        }
      }
    )
    .then(eventCenter => {
      if(!eventCenter){
        return centers
        .create({
          name: req.body.name,
          location: req.body.location,
          sits: req.body.sits,
          cost: req.body.cost,
          facilities: req.body.facilities
        })
        .then(center => res.status(201).send(center))
        .catch(error => res.status(404).send(error));
      } else {
        res.status(200).send({ message: 'a center with this name already exist'})
      }
    })
    .catch(error => res.status(404).send({message: 'something went wrong'}))
  }

  //  return all event centers
  getEventCenters(req, res) {
    return centers
    .findAll()
    .then(eventCenter => {
      if(eventCenter){
        res.status(200).send(eventCenter)
      }
    })
    .catch(error => res.status(404).send({ message: 'No event center found'}))
  }
  
  // an event center given its it id is present
  getEventCenter(req, res) {
    const centerId = parseInt(req.params.centerId)
    return centers
    .find(
      {
        where:{
          id: centerId
        }
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
    return centers
    .find(
      {
        where:{ 
          name: req.params.name
        }
      }
    )
    .then(eventCenter => {
      if(eventCenter){
        res.status(200).send(eventCenter);
      } else {
        res.status(404).send({ message: 'No center found for this name'});
      }
    } )
    .catch(error => res.status(204).send({
      message: 'No center is found matching this Id'
    }))
  }
   // get an event center by location
   getCenterByLocation(req, res) {
    return centers
    .find(
      {
        where: {
          location: req.params.location
        }
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
    const centerId = parseInt(req.params.centerId)
    return centers
    .find(
      {
        where: {
          id: centerId
      }
    }
    )
    .then(eventCenter => {
      if(eventCenter){
        return eventCenter
        .update({
          name: req.body.name || eventCenter.name,
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
