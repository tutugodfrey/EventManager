import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';;
const assert = chai.assert;
const server = new Server();
const expect = chai.expect;
const app = server.expressServer();
chai.use(chaiHttp);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoZW5LZXkiOiJndHV0dSIsImlhdCI6MTUxMjc1Mzg1NSwiZXhwIjoxNTEyOTI2NjU1fQ.S0NOV3_hTrxIwq8ooLGTI2XehLwgccLX5W7-gEuPFM0";
const user = {
  fullname: "tut godfrey",
  username: "tutu",
  email:"me@yaho.com",
  gender: "male",
  imgUrl: "path-to-img",
  passwd1: "12345",
  passwd2:"12345",
  userType:"regular"
}
const center = {
  token,
  userType:"admin",
  name: "gard park",
  location: "Abuja",
  cost: 240,
  sits: 500,
  imgUrl: "path-to-img",
  facilities: ["Air condition"]
  

}
const updateCenter = {
  name: null,
  location: null,
  cost: 250,
  sit: 500,
  facilities: null
}
const events = {
  token,
  type:"wedding",
  date:"2018-01-10",
  facilities: ["projector"],
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
  token,
  message: "your events is cancelled",
  userType: "admin",
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
      .get('/api/users/2')
      .then((res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('Object')
      });
    })
  });
  
  describe('Center', () => {
    it('should create event Center', () => {
      return chai.request(app)
      .post('/api/centers')
      .send(center)
      .then((res) => {
        expect(res).to.have.status(201);
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
      .get('/api/centers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      });
    });
    it('should get a single events center given its id', () => {
      return chai.request(app)
      .get('/api/centers/1')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      })
    });
    it('should get a center name', () => {
      return chai.request(app)
      .get('/api/centers/centername/bushbar')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      })
    });
    it('should get a center by location', () => {
      return chai.request(app)
      .get('/api/centers/location/Lagos')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      })
    });
  });

  describe('Events', () => {
    it('should create event', () => {
     return chai.request(app)
     .post('/api/events')
     .send(events)
     .then((res) => {
       expect(res).to.have.status(201);
       expect(res.body).to.be.an('object');
     })
   });
  it('should update an event', () => {
   return chai.request(app)
   .put('/api/events/1')
   .send(updateEvent)
   .then((res) => {
     expect(res).to.have.status(200);
     expect(res.body).to.be.an('object');
    })
   });
   it("should return the user info", function() {
   return chai.request(app)
   .get("/api/events")
   .then(function(res) {
     expect(res).to.have.status(200);
   });
  }); 
   it('should get all events given its center id', () => {
       return chai.request(app)
       .get('/api/events/centers/2')
       .then((res) => {
       expect(res).to.have.status(200);
       expect(res.body).to.be.an('object');
     })
   });
   it('should get an event belonging to a user given the event id', () => {
       return chai.request(app)
       .get('/api/events/users/3')
       .then((res) => {
       expect(res).to.have.status(200);
       expect(res).to.be.an('object');
     })
   });
   it('should get all events belonging to a user given the userId id', () => {
       return chai.request(app)
       .get('/api/events/1')
       .then((res) => {
       expect(res).to.have.status(200);
       expect(res.body).to.be.an('object');
     })
   });
   it('should delete an events given its id', () => {
       return chai.request(app)
       .delete('/api/events/1')
       .then((res) => {
       expect(res).to.have.status(200);
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
        expect(res).to.have.status(201)
      });
    });
    it('Get notification', () => {
      return chai.request(app)
      .get('/api/notifications/1')
      .then((res) => {
        expect(res).to.have.status(200)
      });
    });

  });
});

