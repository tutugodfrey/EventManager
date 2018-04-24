
import models from './../models';
import { getImgUrl } from './../funcs/HelperFuncts';

const { centers } = models;
const EventCenterController = class {
  /* eslint-disable class-methods-use-this */
  // add a new event center
  addEventCenter(req, res) {
    if (req.body.userType === 'admin') {
      return centers
        .find({
          where: {
            centerName: req.body.centerName,
            location: req.body.location,
          },
        })
        .then((eventCenter) => {
          if (!eventCenter) {
            const destination = getImgUrl(req.file.path);
            return centers
              .create({
                centerName: req.body.centerName,
                location: req.body.location,
                sits: parseInt(req.body.sits, 10),
                cost: parseInt(req.body.cost, 10),
                facilities: req.body.facilities,
                imgUrl: destination,
                userId: parseInt(req.body.userId, 10),
              })
              .then(center => res.status(201).send(center))
              .catch(error => res.status(400).send(error));
          }
          return res.status(200).send({ message: 'a center with this name already exist' });
        })
        .catch(error => res.status(404).send(error));
    }
    return res.status(402).send({ message: 'You are not allowed to perform this action' });
  }

  //  return all event centers
  getEventCenters(req, res) {
    return centers
      .findAll()
      .then((eventCenter) => {
        if (eventCenter) {
          res.status(200).send(eventCenter);
        }
      })
      .catch((error) => {
        return res.status(404).send({
          error,
          message: 'No event center found',
        });
      });
  }

  // an event center given its it id is present
  getEventCenter(req, res) {
    const centerId = parseInt(req.params.centerId, 10);
    return centers
      .find({
        where: {
          id: centerId,
        },
      })
      .then((eventCenter) => {
        if (eventCenter) {
          res.status(200).send(eventCenter);
        }
      })
      .catch((error) => {
        return res.status(404).send({
          error,
          message: 'No center is found matching this Id',
        });
      });
  }

  // get an event center by name
  getCenterByName(req, res) {
    return centers
      .find({
        where: {
          name: req.params.name,
        },
      })
      .then((eventCenter) => {
        if (eventCenter) {
          return res.status(200).send(eventCenter);
        }
        return res.status(404).send({ message: 'No center found for this name' });
      })
      .catch((error) => {
        return res.status(204).send({
          error,
          message: 'No center is found matching this Id',
        });
      });
  }
  // get an event center by location
  getCenterByLocation(req, res) {
    return centers
      .find({
        where: {
          location: req.params.location,
        },
      })
      .then((eventCenters) => {
        if (eventCenters) {
          res.status(200).send(eventCenters);
        }
      })
      .catch(error => res.status(204).send({
        error,
        message: 'No center is found matching this Id',
      }));
  }

  updateEventCenter(req, res) {
    if (req.body.userType === 'admin') {
      const centerId = parseInt(req.params.centerId, 10);
      return centers
        .find({
          where: {
            id: centerId,
          },
        })
        .then((eventCenter) => {
          if (eventCenter) {
            return eventCenter
              .update({
                centerName: req.body.centerName || eventCenter.centerName,
                location: req.body.location || eventCenter.location,
                sits: req.body.sits || eventCenter.sits,
                cost: req.body.cost || eventCenter.cost,
                facilities: req.body.facilities || eventCenter.facilities,
              })
              .then(updatedCenter => res.status(201).send(updatedCenter))
              .catch(() => res.status(404).send({ message: 'update fail' }));
          }
          return res.status(404).send({ message: 'Event center not found' });
        })
        .catch(error => res.status(500).send(error));
    }
    return res.status(404).send({ message: 'Event center not found' });
  }

  deleteEventCenter(req, res) {
    if (req.body.userType === 'admin') {
      const centerId = parseInt(req.params.centerId, 10);
      return centers
        .find({
          where: {
            id: centerId,
          },
        })
        .then((eventCenter) => {
          if (eventCenter) {
            return eventCenter
              .destroy({
                where: {
                  id: centerId,
                },
              })
              .then(() => {
                return res.status(200).send({ message: 'center has been deleted' });
              });
          }
          return res.status(404).send({ message: 'center not found' });
        })
        .catch(error => res.status(500).send(error));
    }
    return res.status(404).send({ message: 'you are not allowed to perform this action' });
  }
};
export default EventCenterController;
