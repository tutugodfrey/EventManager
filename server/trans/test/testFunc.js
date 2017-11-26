'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _funcs = require('./../funcs/funcs');

var _funcs2 = _interopRequireDefault(_funcs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var funcs = new _funcs2.default();
var expect = _chai2.default.expect;

describe('Funct class', function () {
	describe('Class', function () {
		it('Should export a function', function () {
			expect(_funcs2.default).to.be.a('function');
		});
		it('Should export a function', function () {
			expect(funcs).to.be.a('Object');
		});
		it('funcs should be an instance of Functs', function () {
			expect(funcs).to.be.an.instanceOf(_funcs2.default);
		});
	});
});
//# sourceMappingURL=testFunc.js.map