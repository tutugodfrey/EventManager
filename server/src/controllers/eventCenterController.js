
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
    const centerId = functs.getField(eventCenters, 'centerId') + 1;
    const newEventCenter = {
		  centerId,
      centerName: req.body.centerName,
      location: req.body.location,
      facilities: req.body.facilities,
      cost: req.body.cost,
    };
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
   // const getEventCenter = functs.getObject(eventCenters, centerId);
    for (let eventCenter of eventCenters) {
      if (eventCenter['centerId'] === centerId) {
       // centerCollector = eventCenter
        res.status(200).send(eventCenter);
        break;
      } 
    }
    //  if(eventCenterCollector.length > 0){
    //    res.status(200).send(eventCenterCollector)
    //  } else {
        res.status(404).send('Center not Found');
    //  }
  }
  getCenterByName(req, res) {
    const centerName = req.params.centerName;
    for(let eventCenter of eventCenters)  {
      if(eventCenter['centerName'] === centerName) {
        res.status(200).send(eventCenter);
        break;
      }
    }
    res.status(404).send({ message: 'Not found'});
  }
  updateEventCenter(req, res) {
    const centerId = parseInt(req.params.centerId);
    // const getEventCenterId = functs.getObject(eventCenters, 'centerId');
    let newEventCenter;
    let centerHolder;
  for (let eventCenter of eventCenters) {
      if (eventCenter['centerId'] === centerId) {
        centerHolder = eventCenter;
			  const centerName = req.body.centerName || eventCenter[centerName];
        const location = req.body.location || eventCenter[location];
        const facilities = req.body.facilities || eventCenter[facilities];
        const cost = req.body.cost || eventCenter[cost];
			  newEventCenter = {
          centerId,
          centerName,
          facilities,
          cost,
          location,
		    };
	  	}

	 }
	  let eventCenterPos = eventCenters.indexOf(centerHolder);
    if (eventCenters[eventCenterPos] = newEventCenter) {
      res.status(200).send(newEventCenter);
    } else {
      res.status(404).send('Not Found');
    }
  }
};
export default EventCenterController;
