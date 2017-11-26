import events from './../models/eventsModel';
import eventCenters from './../models/eventCentersModel';
import Functs from './../funcs/funcs';
// import EventCenterController from './'
const functs = new Functs();


const EventsController = class {
  constructor() {
    this.events = events;
  }

  // controller to add event
  addEvent(req, res) {
   const eventId = functs.getField(events, 'eventId') + 1;
    const newEvent = {
		  eventId,
		  centerName: req.body.centerName,
      location: req.body.location,
		  facilities: req.body.facilities,
		  typeOfEvent: req.body.typeOfEvent,
      dateOfEvent: req.body.cost,
      centerId: req.body.centerId,
      ownerId: req.body.ownerId
    };
    events.push(newEvent);
    res.status(201).send(newEvent);
  }

  // controll to update event
  updateEvent(req, res) {
    const id = parseInt(req.params.eventId);
    const getEvent = functs.getObject(events, id);
    let newEvent;
    let eventHolder;
    for (let event of events) {
      if (event.eventId === id) {
        eventHolder = event;
        const eventId = id;
			  const centerName = req.body.centerName || event[centerName];
        const location = req.body.location || event[location];
        const facilities = req.body.facilities || event[facilities];
        const typeOfEvent = req.body.typeOfEvent || event[typeOfEvent];
        const dateOfEvent = req.body.dateOfEvent || event[dateOfEvent];
        const centerId = req.body.centerId || event[centerId];
        const ownerId = req.body.ownerId || event[ownerId];
        newEvent = {
          eventId,
          centerName,
          location,
          facilities,
          typeOfEvent,
          dateOfEvent,
          centerId,
          ownerId,
        };
      }
    }
    const eventPos = events.indexOf(eventHolder);
    if (events[eventPos] = newEvent) {
      res.status(200).send(newEvent);
    } else {
      res.status(404).send({ message: 'Not Found: no action taken' });
    }
  }

  // controller to get all events given the centerId
  getCenterEvents(req, res) {
    const centerId = parseInt(req.params.centerId);
    const eventsCollector = [];
    for(let event of events) {
      if(event['centerId'] === centerId) {
        eventsCollector.push(event);
      }
    }
    if(eventsCollector.length > 0) {
      res.status(200).send(eventsCollector);
    } else {
      res.status(404).send({ message: 'No event found' });
    }
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
