![](https://www.travis-ci.org/tutugodfrey/EventManager.svg?branch=feature%2Fnotifications)
[![Coverage Status](https://coveralls.io/repos/github/tutugodfrey/EventManager/badge.svg?branch=master)](https://coveralls.io/github/tutugodfrey/EventManager?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/82a0d53b05a153bb40e2/test_coverage)](https://codeclimate.com/github/tutugodfrey/EventManager/test_coverage)
<a href="https://codeclimate.com/github/tutugodfrey/EventManager/maintainability"><img src="https://api.codeclimate.com/v1/badges/82a0d53b05a153bb40e2/maintainability" /></a>

# EventManager
EventManager is an application that allows administrator manage event centers and control booking of event centers they administer. T

## Running basic Oporations
### npm run start:dev
To app in development
## npm run start 
will transpile the es6 file in src directory file to es5 in a trans directory

## Administrator interface
An adminstrator can add event centers through the 

#### post /centers 

To get all event centers 
#### get /centers 

Admin can as well update a center though the 
#### put /centers/:centerId 

To get a center by its id use the 
#### get /centers/:centerId 

To get all upcomming events in a given center use
#### get /centers/events/:centerId 


Basic operation that can be performed by registered users include:

User can make booking for an event
#### post /events

To update a particular events given its id use. This will be the event created by the the user performing the action

#### put /events/:eventId

To get all events add by a user
#### get /events/users/userId

## Notifications
Admin can post notifications if a users event will not be fulfilled for any reason
#### /api/notifications

Users can get notification if their events are cancelled through email or when they login to app
/api/notifications/:userId




















