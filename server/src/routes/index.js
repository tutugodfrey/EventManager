
// import controllers
import EventCenterController from './../controllers/eventCenterController';
import EventsController from './../controllers/eventController';
import UsersController from './../controllers/usersController';

const eventCenter = new EventCenterController();
const events = new EventsController();
const users = new UsersController();
const Routes = class {
  routes(app) {
    app.get('/', (req, res) => {
      res.status(200).send('Welcom to Eventmanager');
    });

    // route for users signup and signin
    app.post('/api/signup', users.signup );
    app.post('/api/signin', users.signin);

    // route controllers for Event Centers
    app.post('/api/centers', eventCenter.addEventCenter);
    app.get('/api/centers', eventCenter.getEventCenters);
    app.get('/api/centers/:centerId', eventCenter.getEventCenter);
    app.get('/api/centers/name/:centerName', eventCenter.getCenterByName);
    app.put('/api/centers/:centerId', eventCenter.updateEventCenter);

    // route controllers for events
    app.post('/api/events', events.addEvent);
    app.put('/api/events/:eventId', events.updateEvent);
    app.get('/api/events', events.getEvents);
    app.get('/api/events/centers/:centerId', events.getCenterEvents);
    app.get('/api/events/users/:eventId', events.getEvent);
    app.delete('/api/events/:eventId', events.deleteEvent);
    app.get('/api/events/:ownerId', events.getUsersEvents);
  }
};

export default Routes;
