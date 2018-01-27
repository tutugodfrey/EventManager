import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';
import models from './../models'
const assert = chai.assert;
const server = new Server();
const expect = chai.expect;
const app = server.expressServer();
chai.use(chaiHttp);

const adminUser = {};
const regularUser =  {};
const signedInUser = {};
const eventCenter = {};
const event = {};

describe('API routes', () => {
/*
  before('clear database', done =>  { 
      return models.sequelize.sync({ force: true })
      .then(model => { console.log("table recreated")})
      .catch(function(error) { 
        console.log('table sync error'); 
        throw error;
        done(); 
      });
  }); */
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

  describe('Admin User', () => {
    it('should create new admin user', () => {
      return chai.request(app)
      .post('/users/signup')
      .set('Content-Type', 'multipart/form-data')
      .field("fullname", "tutu godfrey",)
      .field("username", "tutug",)
      .field("email","meandyou@yahoo.com")
      .field("gender", "male")
      .field("passwd1", "12345")
      .field("passwd2", "12345")
      .field("userType", "admin")
      .field("securityQtn", "what isthe name of your best teacher?")
      .field("securityAns", "westle")
     // .send(user)
      .attach('userPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20150407_0001.png')
      .then((res) => {
        const userInfo = res.body;
        Object.assign(adminUser, res.body)
        expect(res).to.have.status(201)
        expect(res.body).to.be.an('Object')
      });
    })

    it('should signin a adminUser in and give a token', () => {
      return chai.request(app)
      .post('/users/signin')
      .send({
        username:adminUser.username,
        password:"12345"
      })
      .then((res) => {
        Object.assign(signedInUser, res.body);
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('Object')
      });
    })

    it('should create event Center', () => {
      return chai.request(app)
      .post('/api/centers')
      .set('Content-Type', 'multipart/form-data')
      .set("token", signedInUser.token)
      .field("userType", signedInUser.userType)
      .field("centerName", "gard park")
      .field("location", "Abuja")
      .field("cost", 240)
      .field("sits", 500)
      .field("facilities", "Air condition")
      .field("userId", signedInUser.userId)
      .field("facilities", "projector")
      .attach('centerPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20150309_0001.png')
      .then((res) => {
        Object.assign(eventCenter, res.body)
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
    });

    it('should update an event Center', () => {
      const updateCenter = {
        userType: signedInUser.userType,
        centerName: "gard park",
        location: "Abuja",
        cost: 120,
        sits: 520,
        facilities: ["Air condition", "Catering"],
        userId: signedInUser.userId
      }
      return chai.request(app)
      .put(`/api/centers/${eventCenter.id}`)
      .set('token', signedInUser.token)
      .send(updateCenter)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
    });

  });  //end admin section
  describe('regular Users', () => {
    it('should create new regular user', () => {
      return chai.request(app)
      .post('/users/signup')
      .set('Content-Type', 'multipart/form-data')
      .field("fullname", "tut godfrey",)
      .field("username", "gtutu",)
      .field("email","allofus@yahoo.com")
      .field("gender", "male")
      .field("passwd1", "12345")
      .field("passwd2", "12345")
      .field("userType", "regular")
      .field("securityQtn", "what isthe name of your best teacher?")
      .field("securityAns", "westle")
      .attach('userPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20140715_0001.png')
      .then((res) => {
        Object.assign(regularUser, res.body)
        expect(res).to.have.status(201)
        expect(res.body).to.be.an('Object')
      });
    })

    it('should signin a regularUser in and give a token', () => {
      return chai.request(app)
      .post('/users/signin')
      .send({
        username:"gtutu",
        password:"12345"
      })
      .then((res) => {
        Object.assign(signedInUser, res.body);
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('Object')
      });
    })

    it('should create event', () => {
     return chai.request(app)
      .post('/api/events')
      .set("Content-Type", "multipart/form-data")
      .set('token', signedInUser.token)
      .field("eventType", "wedding")
      .field("eventDate", "2018-02-10")
      .field("facilities", eventCenter.facilities[0])
      .field("facilities", eventCenter.facilities[1])
      .field("centerId", eventCenter.id)
      .field("userId", signedInUser.userId)
      .attach('eventPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20150922_0001.png')
      .then((res) => {
        Object.assign(event, res.body)
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      })
    });

    it('should update an event', () => {
      const updateEvent = {
        eventType: "wedding anniversar",
        centerId: event.centerId,
        userId: signedInUser.userId
      }
      return chai.request(app)
      .put(`/api/events/${event.id}`)
      .set('token', signedInUser.token)
      .send(updateEvent)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      })
    });

  }); // end reuglar user
  
  describe('Notifications', () => {
    it('should signin a adminUser in and give a token', () => {
      return chai.request(app)
      .post('/users/signin')
      .send({
        username:adminUser.username,
        password:"12345"
      })
      .then((res) => {
        Object.assign(signedInUser, res.body);
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('Object')
      });
    })

    it('Create new notification', () => {
      const notification = {
        message: "your events is cancelled",
        userType: signedInUser.userType,
        userId:regularUser.id
      }
      return chai.request(app)
      .post('/api/notifications')
      .set('token', signedInUser.token)
      .send(notification)
      .then((res) => {
        expect(res).to.have.status(201)
      });
    });

    it('Get notification', () => {
      return chai.request(app)
      .get(`/api/notifications/${regularUser.id}`)
      .set('token', signedInUser.token)
      .then((res) => {
        expect(res).to.have.status(200)
      });
    });
  }); //end notification

});

