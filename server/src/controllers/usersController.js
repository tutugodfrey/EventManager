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
						return users
						.create({
						password: passwd,
						fullname: req.body.fullname,
						email: req.body.email,
						username: req.body.username,
						userType:req.body.userType 
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
				let passwordConfirmed = false;
				const hashedPassword = user.password;
				const password = req.body.password;
		   passwordConfirmed =	bcrypt.compareSync(password, hashedPassword);
			  if(passwordConfirmed){
					const authenKey = user['username'];
					const token = jwt.sign({authenKey}, process.env.SECRET_KEY, {	expiresIn:'48h'	});
					res.status(200).send({token: token});
				} else {
					res.status(201).send( {message: 'password is not correct'});
				}
			} else {
				res.status(201).send( {message: 'Your username is not correct'});
			}
		})
		.catch(error => res.status(500).send(error));
	} 
	// get user by id
	getUser(req,res){
		const userId = parseInt(req.params.userId);
		return users
		.findById({
			where:{
				id:userId
			}
		})
		.then(user => {
			if(user){
				res.status(200).send(user);
			} else {
				res.status(404).send({ message: 'User not found'})
			}
		})
		.catch(error => res.status(500).send(error));

	}

	updateUsers (req, res) {
		const userId = parseInt(req.params.userId);
		return users
		.find({
			where: {
				id: userId
			},
		})
		.then(user => {
			if(user) {
				return user
				.update({
				fullname: req.body.fullname || user.fullname,
				username: req.body.username || user.username,
				email: req.body.email || user.email
				})
			}
		})
		.then(user => res.status(201).send(user))
		.catch(error => res.status(404).send(error));
	}
	

}

export default UsersController;