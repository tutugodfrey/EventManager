
// import controllers
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import EventCenterController from './../controllers/eventCenterController';
import EventsController from './../controllers/eventController';
import UsersController from './../controllers/usersController';
import Notifications from './../controllers/notificationsController'
dotenv.config();
const eventCenters = new EventCenterController();
const events = new EventsController();
const users = new UsersController();
const notifications = new Notifications()
const Routes = class {
  constructor() {
    this.users = users;
    this.events = events;
    this.eventCenters = eventCenters;
    this.securedApi = express.Router();
}
  routes(app) {
    app.get('/', (req, res) => {
      res.status(200).send('Welcom to Eventmanager');
    });

    // route for users signup and signin
    app.post('/users/signup', this.users.signup );
    app.post('/users/signin', this.users.signin); 
    app.get('/users', this.users.getUsers); 
    app.get('/users/:userId', this.users.getUser)
    app.get('/centers', this.eventCenters.getEventCenters);
    app.get('/centers/:centerId', this.eventCenters.getEventCenter);
    app.get('/centers/centername/:name', eventCenters.getCenterByName);
    app.get('/centers/location/:location', eventCenters.getCenterByLocation);
    
    // route controllers for events
    app.get('/events', this.events.getEvents);
    app.get('/events/centers/:centerId', this.events.getCenterEvents);
    app.get('/events/users/:eventId', this.events.getEvent);
    app.delete('/events/:eventId', this.events.deleteEvent);
    app.get('/events/:userId', this.events.getUsersEvents);

    // route controllers for notifications
    app.get('/notifications/:userId', notifications.getNotifications);
     
    app.use('/api', this.securedApi);
    // route controllers for Event Centers
    this.securedApi.use((req, res, next) => {
      const token = req.body.token || req.headers.token;
      if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
          if(err) {
            res.status(500).send('Invalid Token');
          } else {
            next();
          }
        })
      } else {
        res.send('Please send a token');
      }
    });   
    
    this.securedApi.post('/centers', this.eventCenters.addEventCenter);
    this.securedApi.put('/users/:userId', this.users.updateUsers);
    this.securedApi.put('/centers/:centerId', this.eventCenters.updateEventCenter);
    this.securedApi.post('/events', this.events.addEvent);
    this.securedApi.put('/events/:eventId/:userId', this.events.updateEvent);
    app.post('/notifications', notifications.createNotification);
  }
};

export default Routes;
