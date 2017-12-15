
// import controllers
import dotenv from 'dotenv';
import express from 'express';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import path from 'path';
import EventCenterController from './../controllers/eventCenterController';
import EventsController from './../controllers/eventController';
import UsersController from './../controllers/usersController';
import Notifications from './../controllers/notificationsController';
const usersDest = './public/users-photo/';
const centersDest = './public/centers-photo/';
const eventsDest = './public/events-photo/';
const usersUpload = multer({dest: usersDest});
const centersUpload = multer({dest: centersDest});
const eventsUpload = multer({dest: eventsDest});
const storage = multer.diskStorage({
  destination: './public/users-photo/',
  filename: function (req, file, cb) {
   cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

// console.log(upload);
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
      res.status(200).sendFile(path.join(__dirname, './../../../client/index.html'));
    });

    // route for users signup and signin
    // app.post('/users/signup', usersUpload.single('users-pix'), this.users.signup );
    app.post('/users/signup', upload.single('users-pix'), this.users.signup );
    app.post('/users/signin', this.users.signin); 
    app.delete('/users/:userId', this.users.deleteUser); 
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
    
    this.securedApi.get('/users', this.users.getUsers); 
    this.securedApi.get('/users/:userId', this.users.getUser);
    this.securedApi.put('/users/:userId', this.users.updateUsers);
    this.securedApi.post('/centers', centersUpload.single('centers-pix'), this.eventCenters.addEventCenter);
    this.securedApi.get('/centers', this.eventCenters.getEventCenters);
    this.securedApi.get('/centers/:centerId', this.eventCenters.getEventCenter);
    this.securedApi.get('/centers/centername/:name', eventCenters.getCenterByName);
    this.securedApi.get('/centers/location/:location', eventCenters.getCenterByLocation);
    this.securedApi.put('/centers/:centerId', this.eventCenters.updateEventCenter);
     // route controllers for events
     this.securedApi.post('/events', eventsUpload.single('events-pix'), this.events.addEvent);
     this.securedApi.put('/events/:eventId', this.events.updateEvent);
     this.securedApi.get('/events', this.events.getEvents);
     this.securedApi.get('/events/centers/:centerId', this.events.getCenterEvents);
     this.securedApi.get('/events/users/:eventId', this.events.getEvent);
     this.securedApi.delete('/events/:eventId', this.events.deleteEvent);
     this.securedApi.get('/events/:userId', this.events.getUsersEvents); 
    
     // route controllers for notifications
    this.securedApi.post('/notifications', notifications.createNotification);
    this.securedApi.get('/notifications', notifications.getAllNotifications);
    this.securedApi.get('/notifications/:userId', notifications.getNotifications);
  }
};

export default Routes;
