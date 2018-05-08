import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';
import models from './../models/index';

const {
  users,
  events,
  centers,
  notifications,
} = models;
const server = new Server();
const { expect } = chai;
const app = server.expressServer();
chai.use(chaiHttp);

const adminUser = {};
const regularUser = {};
const signedInUser = {};
const eventCenter = {};
const event = {};
// get env variable
if (process.env.NODE_ENV !== 'test') {
  /* eslint-disable no-console */
  console.log(`can't run test in non test env. you are in ${process.env.NODE_ENV} environment`);
} else {
  describe('API routes', () => {
    before('clear database', () => {
      return centers.sync({ force: true })
        .then(() => {
          return notifications.sync({ force: true });
        })
        .then(() => {
          return users.sync({ force: true });
        })
        .then(() => {
          return events.sync({ force: true });
        })
        .catch((error) => {
          throw error;
        });
    });

    // test default route
    describe('Home', () => {
      it('should return welcome message', () => {
        return chai.request(app)
          .get('/')
          .then((res) => {
            expect(res.body).to.be.an('Object');
          });
      });
    });

    describe('Admin User', () => {
      it('should create new admin user', () => {
        return chai.request(app)
          .post('/api/v1/users/signup')
          .set('Content-Type', 'multipart/form-data')
          .field('fullname', 'tutu godfrey')
          .field('username', 'tutug')
          .field('email', 'meandyou@yahoo.com')
          .field('gender', 'male')
          .field('passwd1', '12345')
          .field('passwd2', '12345')
          .field('userType', 'admin')
          .field('securityQtn', 'what isthe name of your best teacher?')
          .field('securityAns', 'westle')
        // .send(user)
          .attach('userPix', './filestoupload/wp_ss_20150407_0001.png')
          .then((res) => {
            Object.assign(adminUser, res.body);
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('Object');
          });
      });

      it('should not create already existing user', () => {
        return chai.request(app)
          .post('/api/v1/users/signup')
          .set('Content-Type', 'multipart/form-data')
          .field('fullname', 'tutu godfrey')
          .field('username', 'tutug')
          .field('email', 'meandyou@yahoo.com')
          .field('gender', 'male')
          .field('passwd1', '12345')
          .field('passwd2', '12345')
          .field('userType', 'admin')
          .field('securityQtn', 'what isthe name of your best teacher?')
          .field('securityAns', 'westle')
        // .send(user)
          .attach('userPix', './filestoupload/wp_ss_20150407_0001.png')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('Object');
          });
      });

      it('should not create user if password does not match', () => {
        return chai.request(app)
          .post('/api/v1/users/signup')
          .set('Content-Type', 'multipart/form-data')
          .field('fullname', 'tutu godfrey')
          .field('username', 'tutu')
          .field('email', 'mendyou@yahoo.com')
          .field('gender', 'male')
          .field('passwd1', '12345')
          .field('passwd2', '12346')
          .field('userType', 'admin')
          .field('securityQtn', 'what isthe name of your best teacher?')
          .field('securityAns', 'westle')
        // .send(user)
          .attach('userPix', './filestoupload/wp_ss_20150407_0001.png')
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('Object');
          })
          .catch((res) => {
            expect(res).to.have.status(400);
          });
      });

      it('should not create user if a required field is not present', () => {
        return chai.request(app)
          .post('/api/v1/users/signup')
          .set('Content-Type', 'multipart/form-data')
          .field('fullname', 'tutu godfrey')
          .field('username', 'tutu')
          .field('email', 'mendyou@yahoo.com')
          .field('gender', 'male')
          .field('passwd1', '12345')
          .field('passwd2', '12345')
          .field('userType', 'admin')
          .field('securityQtn', 'what isthe name of your best teacher?')
        // .send(user)
          .attach('userPix', './filestoupload/wp_ss_20150407_0001.png')
          .then((res) => {
            expect(res).to.have.status(400);
            //  expect(res.body).to.be.an('Object');
          })
          .catch((res) => {
            expect(res).to.have.status(400);
            // expect(res.body).to.be.an('Object');
          });
      });

      it('should signin a adminUser in and give a token', () => {
        return chai.request(app)
          .post('/api/v1/users/signin')
          .send({
            username: adminUser.username,
            password: '12345',
          })
          .then((res) => {
            Object.assign(signedInUser, res.body);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('Object');
          });
      });

      it('should not signin a user if password is not correct', () => {
        return chai.request(app)
          .post('/api/v1/users/signin')
          .send({
            username: adminUser.username,
            password: '1345',
          })
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('Object');
          })
          .catch((res) => {
            expect(res).to.have.status(400);
          });
      });

      it('should not singin in username is not found', () => {
        return chai.request(app)
          .post('/api/v1/users/signin')
          .send({
            username: 'wronguser',
            password: '12345',
          })
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('Object');
          })
          .catch((res) => {
            expect(res).to.have.status(400);
          });
      });
      /*
      Attendition!
      it('should fail if token is not sent', () => {
        return chai.request(app)
          .post('/api/v1/secure')
          .set('Content-Type', 'multipart/form-data')
          .field('userType', signedInUser.userType)
          .field('centerName', 'gard park')
          .field('location', 'Abuja')
          .field('cost', 240)
          .field('sits', 500)
          .field('facilities', 'Air condition')
          .field('userId', signedInUser.userId)
          .field('facilities', 'projector')
          .attach('centerPix', './filestoupload/wp_ss_20150309_0001.png')
          .then((res) => {
            expect(res).to.have.status(402);
          })
          .catch(res => expect(res).to.have.status(402));
      });

      it('should fail if token is invalid', () => {
        const { token } = signedInUser;
        const invalidToken = token.substring(0, token.length - 2);
        return chai.request(app)
          .post('/api/v1/secure')
          .set('Content-Type', 'multipart/form-data')
          .set('token', invalidToken)
          .field('userType', signedInUser.userType)
          .field('centerName', 'gard park')
          .field('location', 'Abuja')
          .field('cost', 240)
          .field('sits', 500)
          .field('facilities', 'Air condition')
          .field('userId', signedInUser.userId)
          .field('facilities', 'projector')
          .attach('centerPix', './filestoupload/wp_ss_20150309_0001.png')
          .then((res) => {
            expect(res).to.have.status(401);
          })
          .catch(res => expect(res).to.have.status(401));
      });
      */
      it('should create event Center', () => {
        return chai.request(app)
          .post('/api/v1/secure/centers')
          .set('Content-Type', 'multipart/form-data')
          .set('token', signedInUser.token)
          .field('userType', signedInUser.userType)
          .field('centerName', 'gard park')
          .field('location', 'Abuja')
          .field('cost', 240)
          .field('sits', 500)
          .field('facilities', 'Air condition')
          .field('userId', signedInUser.userId)
          .field('facilities', 'projector')
          .attach('centerPix', './filestoupload/wp_ss_20150309_0001.png')
          .then((res) => {
            Object.assign(eventCenter, res.body);
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
          });
      });

      it('should update an event Center', () => {
        const updateCenter = {
          userType: signedInUser.userType,
          centerName: 'gard park',
          location: 'Abuja',
          cost: 120,
          sits: 520,
          facilities: ['Air condition', 'Catering'],
          userId: signedInUser.userId,
        };
        return chai.request(app)
          .put(`/api/v1/secure/centers/${eventCenter.id}`)
          .set('token', signedInUser.token)
          .send(updateCenter)
          .then((res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
          });
      });
    }); // end admin section
    describe('regular Users', () => {
      it('should create new regular user', () => {
        return chai.request(app)
          .post('/api/v1/users/signup')
          .set('Content-Type', 'multipart/form-data')
          .field('fullname', 'tut godfrey')
          .field('username', 'gtutu')
          .field('email', 'allofus@yahoo.com')
          .field('gender', 'male')
          .field('passwd1', '12345')
          .field('passwd2', '12345')
          .field('userType', 'regular')
          .field('securityQtn', 'what isthe name of your best teacher?')
          .field('securityAns', 'westle')
          .attach('userPix', './filestoupload/wp_ss_20140715_0001.png')
          .then((res) => {
            Object.assign(regularUser, res.body);
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('Object');
          });
      });

      it('should signin a regularUser in and give a token', () => {
        return chai.request(app)
          .post('/api/v1/users/signin')
          .send({
            username: 'gtutu',
            password: '12345',
          })
          .then((res) => {
            Object.assign(signedInUser, res.body);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('Object');
          });
      });

      it('should create event', () => {
        return chai.request(app)
          .post('/api/v1/secure/events')
          .set('Content-Type', 'multipart/form-data')
          .set('token', signedInUser.token)
          .field('eventType', 'wedding')
          .field('eventDate', '2018-02-10')
          .field('facilities', eventCenter.facilities[0])
          .field('facilities', eventCenter.facilities[1])
          .field('centerId', eventCenter.id)
          .field('userId', signedInUser.userId)
          .attach('eventPix', './filestoupload/wp_ss_20150922_0001.png')
          .then((res) => {
            Object.assign(event, res.body);
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
          });
      });

      it('should update an event', () => {
        const updateEvent = {
          eventType: 'wedding anniversar',
          centerId: event.centerId,
          userId: signedInUser.userId,
        };
        return chai.request(app)
          .put(`/api/v1/secure/events/${event.id}`)
          .set('token', signedInUser.token)
          .send(updateEvent)
          .then((res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
          });
      });
    }); // end reuglar user
    describe('Notifications', () => {
      it('should signin a adminUser in and get a token', () => {
        return chai.request(app)
          .post('/api/v1/users/signin')
          .send({
            username: adminUser.username,
            password: '12345',
          })
          .then((res) => {
            Object.assign(signedInUser, res.body);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('Object');
          });
      });

      it('Create new notification', () => {
        const notification = {
          message: 'your events is cancelled',
          userType: signedInUser.userType,
          userId: regularUser.id,
        };
        return chai.request(app)
          .post('/api/v1/secure/notifications')
          .set('token', signedInUser.token)
          .send(notification)
          .then((res) => {
            expect(res).to.have.status(201);
          });
      });

      it('Get notification', () => {
        return chai.request(app)
          .get(`/api/v1/secure/notifications/${regularUser.id}`)
          .set('token', signedInUser.token)
          .then((res) => {
            expect(res).to.have.status(200);
          });
      });
    }); // end notification
  });
}
