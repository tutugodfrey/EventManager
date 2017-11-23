
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
	addEventCenter(req, res){
		const  id = functs.getId(eventCenters);
		const newEventCenter = {
		  	id:id,
			centerName:req.body.centerName,
			location:req.body.location,
			facilities:req.body.facilities,
			cost:req.body.cost
		}
		eventCenters.push(newEventCenter);
		res.status(201).send(newEventCenter);
	}
	//  return all event centers
	getEventCenters(req, res) {
		res.status(200).send(eventCenters);
	}
	// an event center given its it id is present
	getEventCenter(req, res) {
		const centerId = parseInt(req.params.centerId);
		const getEventCenterId = functs.verifyId(eventCenters, centerId);
		for(let eventCenter of eventCenters) {
			if(eventCenter['id'] === centerId){
				res.status(200).send(eventCenter);
			} else {
				res.status(404).send('Center not Found');
			}
		}
	}

	updateEventCenter(req, res) {
		const centerId = parseInt(req.params.centerId);
		const getEventCenterId = functs.verifyId(eventCenters, centerId);
		let newEventCenter;
		for(let eventCenter of eventCenters) {
			if(eventCenter.id === centerId){
			  const centerName = req.body.centerName || eventCenter[centerName];
				const location = req.body.location || eventCenter[location];
				const facilities = req.body.facilities || eventCenter[facilities];
				const cost = req.body.cost || eventCenter[cost];
			  newEventCenter = {
				centerId,
				centerName,
				facilities,
				cost,
				location
		    } 
	  	} 
	  }
	  eventCenterPos = indexOf(newEventCenter)
		if(eventCenters[eventCenterPos] = newEventCenter){
			res.status(200).send(newEventCenter);
		} else {
			res.status(404).send('Not Found');
		}
  }
}
export default EventCenterController