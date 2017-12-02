import models from './../models';
const notifications = models.notifications;
const users = models.users;

const Notifications = class {
	// to post notification to db table as well send an email
  createNotification(req, res) {
  	const userType = req.body.userType;
  	if(userType === 'admin'){
  		const userId = parseInt(req.body.userId);
  		const message = req.body.message;
  		return users
  		.find({
  			where: {
					id: userId,
					userType:'regular'
  			}
  		})
  		.then(user => {
  			if(user){
				const userEmail = user.email;
  			return notifications
  				.create({
  					message:message,
  					userId:userId
  				})
  				.then(created => res.status(201).send(created))
  				.catch(error => res.status(500).send(error));
  			} else {
  				res.status(404).send({ message:'User not found'})
  			}
  		})
  		.catch(error => res.status(500).send(error));
  	}
  }

	getNotifications (req, res) {
		const userId = parseInt(req.params.userId);
		return users
		.find({
			where:{
				id:userId
			}
		})
		.then(user => {
			if(user){
				return notifications
				.findAll({
					where: {
						userId: userId
					}
				})
				.then(notifications => res.status(200).send(notifications))
				.catch(error => res.status(404).send({message: 'No new notification'}));
			} else {
				res.status(404).send({message: 'Not a registered user'});
			}
		})
		.catch(error => res.status(500).send(error));
	}
  // get notification
}

export default Notifications;