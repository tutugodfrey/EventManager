
# EventManager

EventManager is an application for managing event centers. It allows an administrator add details about event centers they manage and control booking
of the centers. The admininstrator can add detail relating to the center name, location, sitting capacity, pricing, and facilities and services that are offered by the center. users can then book thier events in a center of their choosing, and can select the from the facilities offered by the center that they will like to use. When users Book events they can receive status update from the administrator whether they will be able to fulfill the request or not.

---

## Table of Contents

* Status
* Quick Start
* Documentation
* Bugs and Feature Request
* Author
* Copyright and License

---

## Status

![](https://www.travis-ci.org/tutugodfrey/EventManager.svg?branch=feature%2Fnotifications)
[![Coverage Status](https://coveralls.io/repos/github/tutugodfrey/EventManager/badge.svg?branch=master)](https://coveralls.io/github/tutugodfrey/EventManager?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/82a0d53b05a153bb40e2/test_coverage)](https://codeclimate.com/github/tutugodfrey/EventManager/test_coverage)
<a href="https://codeclimate.com/github/tutugodfrey/EventManager/maintainability"><img src="https://api.codeclimate.com/v1/badges/82a0d53b05a153bb40e2/maintainability" /></a>

---

## Quick Start

Clone the repository at `git clone https://github.com/tutugodfrey/eventmanager.git`

Run `npm install` to install dependencies

Starting the application
---
Run `npm run start:dev` to start the application in development. This will start the application in development mode.
In this case the application is being serve from the src/ files. Before pushing to source control or testing with travis ensure you 
run `npm run build` to transpile the source file to es6 and above. Transpilation will build source files into trans/ directory for production and testing with continous integration platform.
To start the application in production mode run `npm start` which will serve the application from the trans/ directory

Migrating models
---
create two databases e.g eventmn-dev, eventmn-test and reference the database url properly in your .env file then
`npm run migrate`. If you need to undo the migration run `npm run undo:migrate` Ensure to set the environment variable before running the commands in the right environment with `export NODE_ENV=test` / `export NODE_ENV=test` `set NODE_ENV=test`/ `set NODE_ENV=test` depending on whetheryou are using bash or windows cmd.

Testing
---
There are two ways to run test locally. `npm run test:local` will transpile from src/ to trans/ directory before running the test which is serve from the trans/ directory. `npm test` will run the test directly from the trans directory. You will probably want to use the latter command if no changes has been made to the files since last transpilation, thus conserving the time use for transpiling.

---

## Directory Structure

* eventmanager
  * api/
  * client/
  * node_modules/
  * public/
  * server/
  * template/
  .babelrc
  .codeclimate.yml
  .env
  .eslintignore
  .eslint.json
  .gitignore
  .hound.yml
  .sequelizerc
  .travis.yml
  .coveralls.yml
  package.json
  Procfile
  README.md
  webpack.config.js

---

## Documentation

Routing table
---

|                    Paths                     |          Methods          |                                     Actions                              |
| -------------------------------------------- | ------------------------- | ------------------------------------------------------------------------ |
| /                                            |  GET                      |  Application root directiory                                             |
| /api/v1/doc                                  |  GET                      |  API Documentation                                                       |
| /api/v1/users/signup                         |  POST                     |  Create a new user acount                                                |
| /api/v1/users/signin                         |  POST                     |  User signin to thier account                                            |
| /api/v1/secure/centers                       |  POST                     |  Create new event center                                                 |
| /api/v1/secure/centers                       |  GET                      |  Get all event centers                                                   |
| /api/v1/secure/centers/:centerId             |  GET                      |  Get event center with id = centerId                                     |
| /api/v1/secure/center/:centerId              |  PUT                      |  Updata info about the center with id = centerId                         |
| /api/v1/secure/events                        |  POST                     |  Create a new event                                                      |
| /api/v1/secure/events/:eventId               |  PUT                      |  Update the event with the given id = eventId                            |
| /api/v1/secure/events/:eventId               |  DELETE                   |  Delete the event with the given id = eventId                            |
| /api/v1/secure/events/:userId                |  GET                      |  Get a list of events with the given userId                              |
| /api/v1/secure/notifications                 |  POST                     |  Post new notification                                                   |
| /api/v1/secure/notifications                 |  GET                      |  Get all notifications                                                   |
| /api/v1/secure/notifications/:userId         |  GET                      |  Get all notification with the given userId                              |

[view documentation](https://eventmn.herokuapp.com/api/v1/docs)

[view project template](https://github.io/tutugodfrey/eventmanager)

---

## Bugs and Feature Request

---

## Author

- Tutu Godfrey<godfrey_tutu@yahoo.com>

---

## Copyright and Licence
