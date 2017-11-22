
import events from './../models/eventsModel';
import eventCenters from './../models/eventCentersModel';
import Functs from './../funcs/funcs';
// import EventCenterController from './'
const functs = new Functs();

const EventCenterController = class {
	constructor() {
		this.eventCenters = eventCenters;
	}

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
		res.send(newEventCenter);
	}
}


export default EventCenterController;