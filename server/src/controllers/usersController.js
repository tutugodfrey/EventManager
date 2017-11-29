// controller for users signup and signin
import jwt from 'jsonwebtoken';
import bcrypt from 'bycrypt';
import users from './../models/users';

const UsersController = class {
  // controller for users signup
  signup(req, res) {
		return users
		.find({
			where: {
				username: req.body.username,
			}
		})
		.then(user => {
			if(!user){
			const passwd1 = req.body.password;
			const passwd2 = req.body.confirmPassword;
			let password;
				if(passwd1 === passwd1) {
					bcrypt.genSalt(10, function(err, salt) {
						bcrypt.hash(passwd1, salt, function(err, hash) {
							password = hash;
						});
					});
						return users
						.create({
						password,
						firstname: req.body.firstname,
						lastname: req.body.lastname,
						email: req.body.email,
						username: req.body.username,
						gender: req.body.gender,
						imageurl: req.body.imageurl,
						usertype: req.body.usertype
					})
					.then(signup => res.status(201).send(signup))
					.catch(error => res.status(400).send(error));
				}  else {
					// password match fail
					res.status(400).send( {message: 'password does not match'})
				}
			} else {
				// username already exist
				res.status(201).send(`A user with this ${req.body.username} already exist`)
			}
		})
		.catch(error => res.status(200).send(error));
	}


  // controllers for users signin
  signin(req, res) {

		return users
		.find({
			where: {
			username: req.body.username,
			password: req.body.password,
			}	
		})
		.then(signin => {
			if(!signin) {
			return res.status(400).send({
			message: 'user does not exist',
		});
		}

		return user
		.all()
		.then(signin => res.status(201).send(signin))
		.catch(error => res.status(400).send(error));

	});
	}

}

export default UsersController;