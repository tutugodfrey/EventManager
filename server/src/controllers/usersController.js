// controller for users signup and signin
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
			return users
			.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
      imageurl: req.body.imageurl,
      usertype: req.body.usertype
		})
		.then(signup => res.status(201).send(signup))
		.catch(error => res.status(400).send(error));

			} else {
				res.status(201).send(`A user with this ${req.body.username} already exist`)
			}
		})
		.catch(error => res.status(400).send(error));
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