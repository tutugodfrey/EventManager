'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-Http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('./../app');

var _app2 = _interopRequireDefault(_app);

var _eventCentersmodel = require('./../models/eventCentersmodel');

var _eventCentersmodel2 = _interopRequireDefault(_eventCentersmodel);

var _eventsmodel = require('./../models/eventsmodel');

var _eventsmodel2 = _interopRequireDefault(_eventsmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  describe('API endpoints', function () {
    // test for events endpoints
    describe('API endpoint /api/events', function () {
      it('should create an events', function () {
        return _chai2.default.request(app).post('/api/events').then(function (res) {
          expect(res).to.have.status(201);
        });
      });

      it('should get all events given owner id', function () {
        return _chai2.default.request(app).get('/api/events/1').then(function (res) {
          expect(res).to.have.status(200);
        });
      });

      it('should update an event given its id', function () {
        return _chai2.default.request(app).put('/api/events/1').then(function (res) {
          expect(res).to.have.status(200);
        });
      });

      it('should get an event belonging to a user given the event id', function () {
        return _chai2.default.request(app).get('/api/events/users/1').then(function (res) {
          expect(res).to.have.status(200);
        });
      });

      it('should get all events irrespective of its id', function () {
        return _chai2.default.request(app).get('/api/events').then(function (res) {
          expect(res).to.have.status(200);
        });
      });

      // handle case to get all event given the center Id
      it('should get all events irrespective of its id', function () {
        return _chai2.default.request(app).get('/api/events/centers/2').then(function (res) {
          expect(res).to.have.status(200);
        });
      });

      it('should delete an events given its id', function () {
        return _chai2.default.request(app).delete('/api/events/1').then(function (res) {
          expect(res).to.have.status(200);
        });
      });
    });

    // test for center end points
    describe('API endpoint /api/eventCenters', function () {
      it('should create event Center', function () {
        return _chai2.default.request(app).post('/api/centers').then(function (res) {
          expect(res).to.have.status(201);
        });
      });

      it('should get a single events center given its id', function () {
        return _chai2.default.request(app).get('/api/centers/1').then(function (res) {
          expect(res).to.have.status(200);
        });
      });

      it('should get all event centers', function () {
        return _chai2.default.request(app).get('/api/centers').then(function (res) {
          expect(res).to.have.status(200);
        });
      });
    });
  });
});
//# sourceMappingURL=test.js.map