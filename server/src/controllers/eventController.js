import events from './../models/events';
import eventCenters from './../models/eventCenters';
import Functs from './../funcs/funcs';
// import EventCenterController from './'
const functs = new Functs();


const EventsController = class {
  constructor() {
    this.events = events;
  }

  // controller to add event
  addEvent(req, res) {
  
  }

  // controll to update event
  updateEvent(req, res) {
    
  }

  // controller to get all events given the centerId
  getCenterEvents(req, res) {
  }

  // controller to get all events given a ownerId 
  getUsersEvents(req, res) {
  	const ownerId = parseInt(req.params.ownerId);
  	const eventCollector = [];
  	for (let event of events) {
  		if (event['ownerId'] === ownerId) {
  			eventCollector.push(event);
  		}
  	}
  	if (eventCollector.length > 0) {
  		res.status(200).send(eventCollector);
  	} else {
  		res.status(404).send({ message: 'Event not found'});
  	}
  }
  // controller to get all events
  getEvents(req, res) {
    if(events){
      res.status(200).send(events);
    } else {
      res.status(404).send({ message:'Not found'});
    }
  } 

   // controller to get an events given the event id
  getEvent(req, res) {
    const eventId = parseInt(req.params.eventId);
    for(let event of events) {
      if(event['eventId'] === eventId){
        res.status(200).send(event);
        break;
      } 
    } 
    res.status(404).send({ message:'Not found'} );
  }

  // controller to delete
  deleteEvent(req, res) {
   const eventId = parseInt(req.params.eventId);
    for (let event of events) {
      if (event['eventId'] === eventId) {
        delete events[event];
        res.status(200).send({ message: 'deleted'});
        break;
      }
    }
    res.status(404).send({ message:'Event not found, no action taken' });
  }
};

export default EventsController;
