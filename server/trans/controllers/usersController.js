'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // controller for users signup and signin


var _users = require('./../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersController = function () {
	function UsersController() {
		_classCallCheck(this, UsersController);
	}

	_createClass(UsersController, [{
		key: 'signup',

		// controller for users signup
		value: function signup(req, res) {
			return _users2.default.find({
				where: {
					username: req.body.username
				}
			}).then(function (user) {
				if (!user) {
					return _users2.default.create({
						firstname: req.body.firstname,
						lastname: req.body.lastname,
						email: req.body.email,
						username: req.body.username,
						password: req.body.password,
						imageurl: req.body.imageurl,
						usertype: req.body.usertype
					}).then(function (signup) {
						return res.status(201).send(signup);
					}).catch(function (error) {
						return res.status(400).send(error);
					});
				} else {
					res.status(201).send('A user with this ' + req.body.username + ' already exist');
				}
			}).catch(function (error) {
				return res.status(400).send(error);
			});
		}

		// controllers for users signin

	}, {
		key: 'signin',
		value: function signin(req, res) {
			return _users2.default.find({
				where: {
					username: req.body.username,
					password: req.body.password
				}
			}).then(function (signin) {
				if (!signin) {
					return res.status(400).send({
						message: 'user does not exist'
					});
				}

				return user.all().then(function (signin) {
					return res.status(201).send(signin);
				}).catch(function (error) {
					return res.status(400).send(error);
				});
			});
		}
	}]);

	return UsersController;
}();

exports.default = UsersController;
//# sourceMappingURL=usersController.js.map