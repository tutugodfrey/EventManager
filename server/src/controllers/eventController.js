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
	addEvent(req, res){
		const  id = functs.getId(events);
		const newEvent = {
		  id:id,
		  centerName:req.body.centerName,
			location:req.body.location,
		  facilities:req.body.facilities,
		  typeOfEvent:req.body.typeOfEvent,
			dateOfEvent:req.body.cost,
			centerId:req.body.centerId,
			ownerId:req.body.ownerId
		}
		events.push(newEvent);
		res.status(201).send(newEvent);
	}

	// controll to update event
	updateEvent(req, res){
		const eventId = parseInt(req.params.eventId);
		const getEventId = functs.verifyId(events, eventId);
		let newEvent;
		for(let event of events) {
			if(event.id === eventId){
				const id = eventId
			  const centerName = req.body.centerId || event[centerName];
				const location = req.body.location || event[location];
				const facilities = req.body.facilities || event[facilities];
				const typeOfEvent = req.body.typeOfEvent || event[typeOfEvent];
				const dateOfEvent = req.body.dateOfEvent || event[dateOfEvent];
				const centerId = req.body.centerId || event[centerId];
				const ownerId = req.body.ownerId || event[ownerId];
				newEvent = {
					id,
					centerName,
					location,
					facilities,
					typeOfEvent,
					dateOfEvent,
					centerId,
					ownerId
				} 
			} 
		}
		const eventPos = events.indexOf(newEvent)
		if(events[eventPos] = newEvent){
			res.status(200).send(newEvent);
		} else {
			res.status(404).send('Not Found: no action taken');
		}
  }


	// controller to delete
	deleteEvent(req, res){
			res.send('update event');
	}
}

export default EventsController;