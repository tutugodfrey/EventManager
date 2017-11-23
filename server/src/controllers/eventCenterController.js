
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
		const  eventCenterId = functs.getId(eventCenters);
		const newEventCenter = {
			id:eventCenterId,
			eventCenterName:req.body.center,
			eventCenterLocatioon:req.body.place,
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
		const eventCenterId = req.params.id;
		const getEventCenterId = functs.verifyId(eventCenters, eventCenterId);
		for(let eventCenter of eventCenters) {
			if(eventCenter[getEventCenterId] === eventCenterId){
				res.status(200).send(eventCenter);
			} else {
				res.status(404).send(eventCenter);
			}
		}

	}
}


export default EventCenterController;