'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('./../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = _chai2.default.assert;
var app = new _app2.default();
var expect = _chai2.default.expect;
describe('Server', function () {
	describe('Valid Server', function () {
		it('should export a function', function () {
			expect(_app2.default).to.be.a('function');
		});
		it('should to be an object', function () {
			expect(app).to.be.a('Object');
		});
		it('app should be an instanceOf Server', function () {
			expect(app).to.be.an.instanceOf(_app2.default);
		});
	});
});
//# sourceMappingURL=test.js.map