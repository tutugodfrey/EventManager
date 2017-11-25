
import chai from 'chai';
import chaiHttp from 'chai-Http';
import Server from './../app';
import EventCenters from './../models/eventCentersmodel';
import events from './../models/eventsmodel';
const assert = chai.assert;
const server = new Server();
const expect = chai.expect;
const app = server.expressServer();
chai.use(chaiHttp);

describe('Server', () => {
  describe('unit test', () => {
    it('should export a function', () => {
      expect(Server).to.be.a('function');
    });
    it('should to be an object', () => {
      expect(server).to.be.a('Object');
    });
    it('server should be an instanceOf Server', () => {
      expect(server).to.be.an.instanceOf(Server);
    });
  });
  describe('API endpoints', () => {
    // test for events endpoints
    describe('API endpoint /api/events', () => {
      it('should create an events', () => {
        return chai.request(app)
        .post('/api/events')
        .then((res) => {
          expect(res).to.have.status(201);
        })
      });

      it('should get all events given owner id', () => {
        return chai.request(app)
        .get('/api/events/1')
        .then((res) => {
          expect(res).to.have.status(200);
        })
      })

      it('should update an event given its id', () => {
        return chai.request(app)
        .put('/api/events/1')
        .then((res) => {
          expect(res).to.have.status(200);
        })
      });

      it('should get an event belonging to a user given the event id', () => {
        return chai.request(app)
        .get('/api/events/users/1')
        .then((res) => {
          expect(res).to.have.status(200);
        })
      });

      it('should get all events irrespective of its id', () => {
          return chai.request(app)
          .get('/api/events')
          .then((res) => {
          expect(res).to.have.status(200);
        })
      });

      // handle case to get all event given the center Id
      it('should get all events irrespective of its id', () => {
          return chai.request(app)
          .get('/api/events/centers/2')
          .then((res) => {
          expect(res).to.have.status(200);
        })
      });
     
      it('should delete an events given its id', () => {
          return chai.request(app)
          .delete('/api/events/1')
          .then((res) => {
          expect(res).to.have.status(200);
        })
      });
    })
    
    // test for center end points
    describe('API endpoint /api/eventCenters', () => {
      it('should create event Center', () => {
        return chai.request(app)
        .post('/api/centers')
        .then((res) => {
          expect(res).to.have.status(201);
        })
      });

      it('should get a single events center given its id', () => {
        return chai.request(app)
        .get('/api/centers/1')
        .then((res) => {
          expect(res).to.have.status(200);
        })
      });

      it('should get all event centers', () => {
        return chai.request(app)
        .get('/api/centers')
        .then((res) => {
          expect(res).to.have.status(200);
        })
      })
      
    })
  })
});
