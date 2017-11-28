'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('./../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import EventCenters from './../models/eventCentersmodel';
// import events from './../models/eventsmodel';
var assert = _chai2.default.assert;
var server = new _app2.default();
var expect = _chai2.default.expect;
var app = server.expressServer();
_chai2.default.use(_chaiHttp2.default);

describe('Server', function () {
  describe('unit test', function () {
    it('should export a function', function () {
      expect(_app2.default).to.be.a('function');
    });
    it('should to be an object', function () {
      expect(server).to.be.a('Object');
    });
    it('server should be an instanceOf Server', function () {
      expect(server).to.be.an.instanceOf(_app2.default);
    });
  });
  describe('API endpoints: Valid cases', function () {
    // test for events endpoints
    describe('API endpoint /api/events', function () {
      it('should create an events', function () {
        return _chai2.default.request(app).post('/api/events').then(function (res) {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
      });

      it('should get all events given owner id', function () {
        return _chai2.default.request(app).get('/api/events/1').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        });
      });

      it('should update an event given its id', function () {
        return _chai2.default.request(app).put('/api/events/1').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
      });

      it('should get an event belonging to a user given the event id', function () {
        return _chai2.default.request(app).get('/api/events/users/1').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
      });

      it('should get all events irrespective of its id', function () {
        return _chai2.default.request(app).get('/api/events').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        });
      });

      // handle case to get all event given the center Id
      it('should get all events irrespective of given its center id', function () {
        return _chai2.default.request(app).get('/api/events/centers/2').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        });
      });

      it('should delete an events given its id', function () {
        return _chai2.default.request(app).delete('/api/events/1').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
      });
    });

    // test for center end points
    describe('API endpoint /api/eventCenters', function () {
      it('should create event Center', function () {
        return _chai2.default.request(app).post('/api/centers').then(function (res) {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
      });

      it('should get a single events center given its id', function () {
        return _chai2.default.request(app).get('/api/centers/1').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
      });

      it('should get all event centers', function () {
        return _chai2.default.request(app).get('/api/centers').then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        });
      });
    });
  });
  // Handle invalid cases
  describe('API endpoints: Invalid paths', function () {
    describe('Event', function () {
      it('should not get an event belonging to a user given the event id', function () {
        return _chai2.default.request(app).get('/api/events/user/5').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });
      it('should not get all events irrespective of its id', function () {
        return _chai2.default.request(app).get('/api/event/').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });
      it('should not get all events irrespective of its id', function () {
        return _chai2.default.request(app).get('/api/events/center/8').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });
      it('should not delete an events given its id', function () {
        return _chai2.default.request(app).delete('/api/event/').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });
      it('should not update an event given its id', function () {
        return _chai2.default.request(app).put('/api/event/6').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });
    });

    describe('eventCenters', function () {
      it('should not create event Center', function () {
        return _chai2.default.request(app).post('/api/center').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });

      it('should not get a single events center given its id', function () {
        return _chai2.default.request(app).get('/api/center/1').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });

      it('should not get all event centers', function () {
        return _chai2.default.request(app).get('/api/center').then(function (res) {
          throw new Error('Invalid Path');
        }).catch(function (err) {
          expect(err).to.have.status(404);
        });
      });
    });
  });
});
//# sourceMappingURL=test.js.map