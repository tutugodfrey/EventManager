
import express from 'express';
// import controllers
 import EventCenterController from './../controllers/eventCenterController';
 const eventCenter = new EventCenterController();


 const Routes = class {
	constructor(){

	}
	routes(app){
		app.get('/', (req, res) => {
      res.status(200).send('Welcom to Eventmanager');
      });
		app.post('/api/centers', eventCenter.addEventCenter);
		app.get('/api/centers', eventCenter.getEventCenter);
	}
}

export default Routes;