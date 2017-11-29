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
			username: req.body.username
			}	
		})
		.then(user => {
			if(user){
				const password = req.body.password;
				bcrypt.compare(Password, hash, function(err, res) {
					const passwordConfirmed = res
				});
				if(passwordConfirmed) {
					// sign the user with username and password
					const authenKey = {
						username:user[username],
						email:user[email]
					}
					const token = jwt.sign(authenKey, process.env.SECRET_KEY, {
						expiresIn: 4000
					});
					res.json({
							success:true,
							token:token
				 });
		
				} else {
				 res.status(201).send( {message: 'password is not correct'});
				}
			}
		})
		.catch(error => res.status(200).send(error));
	} 
	

}

export default UsersController;