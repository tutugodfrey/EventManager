import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';;
const assert = chai.assert;
const server = new Server();
const expect = chai.expect;
const app = server.expressServer();
chai.use(chaiHttp);
const center = {
  name: "garden park",
  location: "Abuja",
  cost: 240,
  sit: 500,
  facilities: "Air condition"
}
const events = {
  type:"wedding",
  date:"14-9-2018",
  facilities: "projector",
  centerId: 1,
  userId: 1
}
const notification = {
  message: "your events is cancelled",
  userId:1
}

describe('API routes', () => {

   before(function() {

   });

   after(function() {

   });
  // test users
  describe('Users', () => {
    it('should return welcome message', () => {
      return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res.body).to.be.an('Object')
      });
    })
  });
  describe('Events', () => {
     it('should create event', () => {
      return chai.request(app)
      .post('/api/events')
      .send(events)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      })
    });
    it("should return the user info", function() {
    return chai.request(app)
    .get("/events")
    .then(function(res) {
      expect(res).to.have.status(200);
    });
   }); 
    it('should get all events given its center id', () => {
        return chai.request(app)
        .get('/events/centers/2')
        .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
      })
    });
    it('should delete an events given its id', () => {
        return chai.request(app)
        .delete('/events/1')
        .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      })
    });

  });
  describe('Center', () => {
    it('should create event Center', () => {
      return chai.request(app)
      .post('/api/centers')
      .send(center)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      });
    });
    it('should get all event centers', () => {
      return chai.request(app)
      .get('/centers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
    });
    it('should get a single events center given its id', () => {
      return chai.request(app)
      .get('/centers/1')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      })
    });
  });
  describe('Notifications', () => {
    it('Create new notification', () => {
      return chai.request(app)
      .post('/api/notifications')
      .send(notification)
      .then((res) => {
        expect(res).to.have.status(200)
      });
    });
    it('Get notification', () => {
      return chai.request(app)
      .get('/notifications/1')
      .then((res) => {
        expect(res).to.have.status(200)
      });
    });

  })
})