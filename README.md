![](https://www.travis-ci.org/tutugodfrey/EventManager.svg?branch=feature%2Fnotifications)
[![Coverage Status](https://coveralls.io/repos/github/tutugodfrey/EventManager/badge.svg?branch=master)](https://coveralls.io/github/tutugodfrey/EventManager?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/82a0d53b05a153bb40e2/test_coverage)](https://codeclimate.com/github/tutugodfrey/EventManager/test_coverage)
<a href="https://codeclimate.com/github/tutugodfrey/EventManager/maintainability"><img src="https://api.codeclimate.com/v1/badges/82a0d53b05a153bb40e2/maintainability" /></a>

# EventManager
EventManager is an application that allows administrator manage event centers and control booking of event centers they administer.

## Running basic Oporations
To run app in development
### npm run start:dev

## npm run start:dev
Will transpile the es6 file in src directory file to es5 in a trans directory

## User
Users signup 
#### post /users/signup 

Users signin
#### post /users/signin
To get user given the userId 

#### get /users/1

## Administrators
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

To get all event 
#### get /events

To delete an event given its id
#### delete /events/:eventId

## Users Operations

User can make booking for an event
#### post /events

To update a particular events given its id use. This will be the event created by the the user performing the operation
#### put /events/:eventId/:userId

To get all events added by a user
#### get /events/users/"userId

To get all events given the user id
#### get /events/users/

 To get all events in a given center
 #### get /events/centers/:centerId

## Notifications
Admin can post notifications if a users event will not be fulfilled for any reason
#### post /api/notifications

Users can get notification if their events are cancelled through email or when they login to app
#### get /notifications/:userId
#Testing
## Using test database
### Using before hook
To work around sequelize error Cannot read property '0' of undefined, in your local node_modules/sequelize/lib/dialets/postgres/query.js, locate
```
  // const rows = queryResult.rows;
  // const rowCount = queryResult.rowCount;
```
and replace with
```
  const rows = Array.isArray(queryResult) ? queryResult.reduce((rows, r) => rows.concat(r.rows), []) : queryResult.rows;
  const rowCount = Array.isArray(queryResult) ? queryResult.reduce((rowCount, r) => rowCount + r.rowCount, 0) : queryResult.rowCount; 
```
### To switch to test_db, before running test on the commandline
```export NODE_ENV=test
or
  set NODE_ENV=test
```















