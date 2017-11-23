
import express from 'express';
// import controllers
 import EventCenterController from './../controllers/eventCenterController';
 import EventsController from './../controllers/eventController';
 const eventCenter = new EventCenterController();
 const events = new EventsController();


 const Routes = class {
	constructor(){

	}
	routes(app){
		app.get('/', (req, res) => {
      res.status(200).send('Welcom to Eventmanager');
      });

		// Route controllers for Event Centers
		app.post('/api/centers', eventCenter.addEventCenter);
		app.get('/api/centers', eventCenter.getEventCenters);
		app.get('/api/centers/:centerId', eventCenter.getEventCenter);
		app.put('/api/centers/:centerId', eventCenter.updateEventCenter);

		// route controllers for events
		app.post('/api/events', events.addEvent);
		app.put('/api/events/:eventId', events.updateEvent);
		app.delete('/api/events/:eventId', events.deleteEvent);

	}
}

export default Routes;