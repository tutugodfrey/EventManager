import events from 'eventsModel';
import eventCenters from 'eventCentersModel';

export default const EventCenterController = class {
	constructor() {

	}
	addEventCenter(req, res){
		newEventCenter = {
			eventCenterName = req.body.eventCenterName;
		}
		eventCenters.push(newEventCenter);
		res.send(eventCenterName);
	}
}