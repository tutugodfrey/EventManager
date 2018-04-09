import models from './../models';

const { notifications, users } = models;
const Notifications = class {
  /* eslint-disable class-methods-use-this, prefer-destructuring */
  // to post notification to db table as well send an email
  createNotification(req, res) {
    const userType = req.body.userType;
    if (userType === 'admin') {
      const userId = parseInt(req.body.userId, 10);
      const message = req.body.message;
      return users
        .find({
          where: {
            id: userId,
            userType: 'regular',
          },
        })
        .then((user) => {
          if (user) {
            return notifications
              .create({
                message,
                userId,
              })
              .then(created => res.status(201).send(created))
              .catch(error => res.status(500).send(error));
          }
          return res.status(404).send({ message: 'User not found' });
        })
        .catch(error => res.status(500).send(error));
    }
    return res.status(402).send({ message: 'Your are not allowed to perform this action' });
  }

  getNotifications(req, res) {
    const userId = parseInt(req.params.userId, 10);
    return users
      .find({
        where: {
          id: userId,
        },
      })
      .then((user) => {
        if (user) {
          return notifications
            .findAll({
              where: {
                userId,
              },
            })
            .then(allNotifications => res.status(200).send(allNotifications))
            .catch((error) => {
              res.status(404).send({
                error,
                message: 'No new notification',
              });
            });
        }
        return res.status(404).send({ message: 'Not a registered user' });
      })
      .catch(error => res.status(500).send(error));
  }
  // get all notification
  getAllNotifications(req, res) {
    return notifications
      .all()
      .then(allNotifications => res.status(200).send(allNotifications))
      .catch((error) => {
        res.status(404).send({
          error,
          message: 'No new notification',
        });
      });
  }
};
export default Notifications;
