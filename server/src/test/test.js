
import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';
// import EventCenters from './../models/eventCentersmodel';
// import events from './../models/eventsmodel';
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
  describe('API endpoints: Valid cases', () => {
    // test for events endpoints
    describe('API endpoint /api/events', () => {
      it('should create an events', () => {
        return chai.request(app)
        .post('/api/events')
        .then((res) => {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        })
      });

      it('should get all events given owner id', () => {
        return chai.request(app)
        .get('/api/events/1')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        })
      })

      it('should update an event given its id', () => {
        return chai.request(app)
        .put('/api/events/1')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        })
      });

      it('should get an event belonging to a user given the event id', () => {
        return chai.request(app)
        .get('/api/events/users/1')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        })
      });

      it('should get all events irrespective of its id', () => {
          return chai.request(app)
          .get('/api/events')
          .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        })
      });

      // handle case to get all event given the center Id
      it('should get all events irrespective of given its center id', () => {
          return chai.request(app)
          .get('/api/events/centers/2')
          .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        })
      });
     
      it('should delete an events given its id', () => {
          return chai.request(app)
          .delete('/api/events/1')
          .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
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
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        })
      });

      it('should get a single events center given its id', () => {
        return chai.request(app)
        .get('/api/centers/1')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        })
      });

      it('should get all event centers', () => {
        return chai.request(app)
        .get('/api/centers')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        })
      })
    })
  })
  // Handle invalid cases
  describe('API endpoints: Invalid paths', () => {
    describe('Event', () => {
    it('should not get an event belonging to a user given the event id', () => {
      return chai.request(app)
      .get('/api/events/user/5')
      .then((res) => {
        throw new Error('Invalid Path');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      })
    });
    it('should not get all events irrespective of its id', () => {
     return chai.request(app)
       .get('/api/event/')
       .then((res) => {
         throw new Error('Invalid Path');
        })
        .catch((err) => {
          expect(err).to.have.status(404);
        })
      });
    it('should not get all events irrespective of its id', () => {
        return chai.request(app)
      .get('/api/events/center/8')
      .then((res) => {
       throw new Error('Invalid Path');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      })
    });
    it('should not delete an events given its id', () => {
      return chai.request(app)
      .delete('/api/event/')
      .then((res) => {
       throw new Error('Invalid Path');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      })
    });
    it('should not update an event given its id', () => {
      return chai.request(app)
      .put('/api/event/6')
      .then((res) => {
       throw new Error('Invalid Path');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      })
    }); 
  });
  
describe('eventCenters', () => {
      it('should not create event Center', () => {
        return chai.request(app)
        .post('/api/center')
        .then((res) => {
          throw new Error('Invalid Path');
        })
        .catch((err) => {
          expect(err).to.have.status(404);
        })
      });

      it('should not get a single events center given its id', () => {
        return chai.request(app)
        .get('/api/center/1')
        .then((res) => {
          throw new Error('Invalid Path');
        })
        .catch((err) => {
         expect(err).to.have.status(404);
        })
       });

      it('should not get all event centers', () => {
        return chai.request(app)
        .get('/api/center')
        .then((res) => {
          throw new Error('Invalid Path');
        })
        .catch((err) => {
          expect(err).to.have.status(404);
        })
      })
    })
  })
  
});
