'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('./../app');

var _app2 = _interopRequireDefault(_app);

var _index = require('./../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = _index2.default.users,
    events = _index2.default.events,
    centers = _index2.default.centers,
    notifications = _index2.default.notifications;

var server = new _app2.default();
var expect = _chai2.default.expect;

var app = server.expressServer();
_chai2.default.use(_chaiHttp2.default);

var adminUser = {};
var regularUser = {};
var signedInUser = {};
var eventCenter = {};
var event = {};

describe('API routes', function () {
  before('clear database', function () {
    return centers.sync({ force: true }).then(function () {
      return notifications.sync({ force: true });
    }).then(function () {
      return users.sync({ force: true });
    }).then(function () {
      return events.sync({ force: true });
    }).catch(function (error) {
      throw error;
    });
  });

  // test default route
  describe('Home', function () {
    it('should return welcome message', function () {
      return _chai2.default.request(app).get('/').then(function (res) {
        expect(res.body).to.be.an('Object');
      });
    });
  });

  describe('Admin User', function () {
    it('should create new admin user', function () {
      return _chai2.default.request(app).post('/users/signup').set('Content-Type', 'multipart/form-data').field('fullname', 'tutu godfrey').field('username', 'tutug').field('email', 'meandyou@yahoo.com').field('gender', 'male').field('passwd1', '12345').field('passwd2', '12345').field('userType', 'admin').field('securityQtn', 'what isthe name of your best teacher?').field('securityAns', 'westle')
      // .send(user)
      .attach('userPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20150407_0001.png').then(function (res) {
        Object.assign(adminUser, res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('Object');
      });
    });

    it('should signin a adminUser in and give a token', function () {
      return _chai2.default.request(app).post('/users/signin').send({
        username: adminUser.username,
        password: '12345'
      }).then(function (res) {
        Object.assign(signedInUser, res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('Object');
      });
    });

    it('should create event Center', function () {
      return _chai2.default.request(app).post('/api/centers').set('Content-Type', 'multipart/form-data').set('token', signedInUser.token).field('userType', signedInUser.userType).field('centerName', 'gard park').field('location', 'Abuja').field('cost', 240).field('sits', 500).field('facilities', 'Air condition').field('userId', signedInUser.userId).field('facilities', 'projector').attach('centerPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20150309_0001.png').then(function (res) {
        Object.assign(eventCenter, res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
    });

    it('should update an event Center', function () {
      var updateCenter = {
        userType: signedInUser.userType,
        centerName: 'gard park',
        location: 'Abuja',
        cost: 120,
        sits: 520,
        facilities: ['Air condition', 'Catering'],
        userId: signedInUser.userId
      };
      return _chai2.default.request(app).put('/api/centers/' + eventCenter.id).set('token', signedInUser.token).send(updateCenter).then(function (res) {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
    });
  }); // end admin section
  describe('regular Users', function () {
    it('should create new regular user', function () {
      return _chai2.default.request(app).post('/users/signup').set('Content-Type', 'multipart/form-data').field('fullname', 'tut godfrey').field('username', 'gtutu').field('email', 'allofus@yahoo.com').field('gender', 'male').field('passwd1', '12345').field('passwd2', '12345').field('userType', 'regular').field('securityQtn', 'what isthe name of your best teacher?').field('securityAns', 'westle').attach('userPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20140715_0001.png').then(function (res) {
        Object.assign(regularUser, res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('Object');
      });
    });

    it('should signin a regularUser in and give a token', function () {
      return _chai2.default.request(app).post('/users/signin').send({
        username: 'gtutu',
        password: '12345'
      }).then(function (res) {
        Object.assign(signedInUser, res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('Object');
      });
    });

    it('should create event', function () {
      return _chai2.default.request(app).post('/api/events').set('Content-Type', 'multipart/form-data').set('token', signedInUser.token).field('eventType', 'wedding').field('eventDate', '2018-02-10').field('facilities', eventCenter.facilities[0]).field('facilities', eventCenter.facilities[1]).field('centerId', eventCenter.id).field('userId', signedInUser.userId).attach('eventPix', 'C:/Users/TUTU GODFREY/Desktop/pic/wp_ss_20150922_0001.png').then(function (res) {
        Object.assign(event, res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
    });

    it('should update an event', function () {
      var updateEvent = {
        eventType: 'wedding anniversar',
        centerId: event.centerId,
        userId: signedInUser.userId
      };
      return _chai2.default.request(app).put('/api/events/' + event.id).set('token', signedInUser.token).send(updateEvent).then(function (res) {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
    });
  }); // end reuglar user
  describe('Notifications', function () {
    it('should signin a adminUser in and give a token', function () {
      return _chai2.default.request(app).post('/users/signin').send({
        username: adminUser.username,
        password: '12345'
      }).then(function (res) {
        Object.assign(signedInUser, res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('Object');
      });
    });

    it('Create new notification', function () {
      var notification = {
        message: 'your events is cancelled',
        userType: signedInUser.userType,
        userId: regularUser.id
      };
      return _chai2.default.request(app).post('/api/notifications').set('token', signedInUser.token).send(notification).then(function (res) {
        expect(res).to.have.status(201);
      });
    });

    it('Get notification', function () {
      return _chai2.default.request(app).get('/api/notifications/' + regularUser.id).set('token', signedInUser.token).then(function (res) {
        expect(res).to.have.status(200);
      });
    });
  }); // end notification
});
//# sourceMappingURL=testApi.js.map