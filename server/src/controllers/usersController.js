// controller for users signup and signin
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from './../models';
const users = models.users;

const UsersController = class {
  // controller for users signup
  signup(req, res) {
		return users
		.find({
			where: {
				username: req.body.username
			}
		})
		.then(user => {
			if(!user){
			const passwd1 = req.body.passwd1;
			const passwd2 = req.body.passwd2;
			let passwd;
				if(passwd1 === passwd1) {
					bcrypt.genSalt(10, function(err, salt) {
						bcrypt.hash(passwd1, salt, function(err, hash) {

							passwd = hash;
							console.log(passwd)
						return users
						.create({
						password: passwd,
						fullname: req.body.fullname,
						email: req.body.email,
						username: req.body.username,
		
					})
					.then(signup => res.status(201).send(signup))
					.catch(error => res.status(400).send(error));
						});
					});
					
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
				let passwordConfirmed;
				const hashedPassword = user.password;
				console.log(hashedPassword)
				const password = req.body.password;
				bcrypt.compare(password, hashedPassword, function(err, res) {
					passwordConfirmed = res;
					if(passwordConfirmed) {
					// sign the user with username and password

					const authenKey = user['username'];
					const token = jwt.sign(authenKey, process.env.SECRET_KEY, {
						expiresIn:4000
					});
					res.json({
						success:true,
						token:token
				  });
				} else {
				 res.status(201).send( {message: 'password is not correct'});
				}
			});

			}
		})
		.catch(error => console.log(error, 'MEEEE'));
	} 

	updateUsers (req, res) {
		return users
		.find({
			where: {
				id: req.params.userId,
			},
		})
		.then(user => {
			if(user) {
				return user
				.update({
				firstname: req.body.firstname || user.firstname,
				lastname: req.body.lastname || user.lastname,
				username: req.body.username || user.username,
				email: req.body.email || user.email,
				gender: req.body.gender || user.gender,
				imageUrl: req.body.imageUrl || user.imageUrl
				})
			}
		})
		.then(user => res.status(201).send(user))
		.catch(error => res.status(404).send(error));
	}
	

}

export default UsersController;