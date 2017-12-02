// import modules
import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Routes from './routes/index';
const route = new Routes();

// setup server class
class Server {
  constructor() {
    this.express = express;
    this.bodyParser = bodyParser;
    this.logger = morgan;
    this.route = route;
  }
  expressServer() {
    this.app = this.express();
   // this.app.use(this.logger);
    process.env.SECRET_KEY = 'mysecretkey';
    
    this.app.use(this.bodyParser.urlencoded({ extended: false }));
    this.app.use(this.bodyParser.json());
    // this.app.use(this.logger);
    this.route.routes(this.app);
    return this.app;
  }
}

export default Server;
