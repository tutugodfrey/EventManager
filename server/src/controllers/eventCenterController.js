
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
    res.status(200).send({ message: 'respond with a resource'})
  }
  // an event center given its it id is present
  getEventCenter(req, res) {
    res.status(200).send({ message: 'respond with a resource'})  
  }
  getCenterByName(req, res) {
    res.status(200).send({ message: 'respond with a resource'})
  }
  updateEventCenter(req, res) {
    res.status(200).send({ message: 'respond with a resource'})
  }
};
export default EventCenterController;
