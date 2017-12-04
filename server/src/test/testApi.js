import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';;
const assert = chai.assert;
const server = new Server();
const expect = chai.expect;
const app = server.expressServer();
chai.use(chaiHttp);
const user = {
  fullname: "tutu dodfrey",
  username: "gtutu",
  email:"me@yahoo.com",
  passwd1: "12345",
  passwd2:"12345",
  userType:"regular"
}
const center = {
  name: "garden park",
  location: "Abuja",
  cost: 240,
  sit: 500,
  facilities: "Air condition"
}
const updateCenter = {
  name: null,
  location: null,
  cost: 250,
  sit: 500,
  facilities: null
}
const events = {
  type:"wedding",
  date:"14-9-2018",
  facilities: "projector",
  centerId: 1,
  userId: 1
}
const updateEvent = {
  type:"carnival",
  date:null,
  facilities: null,
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
  describe('Home', () => {
    it('should return welcome message', () => {
      return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res.body).to.be.an('Object')
      });
    })
  });
   describe('Users', () => {
    it('should create a new user', () => {
      return chai.request(app)
      .post('/users/signup')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(201)
        expect(res.body).to.be.an('Object')
      });
    })
    it('should get a user by id', () => {
      return chai.request(app)
      .get('/users/2')
      .then((res) => {
        expect(res).to.have.status(200)
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
   it('should update an event', () => {
    return chai.request(app)
    .put('/api/events')
    .send(updateEvent)
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
    it('should get an event belonging to a user given the event id', () => {
        return chai.request(app)
        .get('/events/users/3')
        .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
      })
    });
    it('should get all events belonging to a user given the userId id', () => {
        return chai.request(app)
        .get('/events/1')
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
    it('should update an event Center', () => {
      return chai.request(app)
      .put('/api/centers')
      .send(updateCenter)
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
    it('should get a center name', () => {
      return chai.request(app)
      .get('/centers/centername/bushbar')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      })
    });
    it('should get a center by location', () => {
      return chai.request(app)
      .get('/centers/location/Lagos')
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

  });
});

