// import modules
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Routes from './routes/index';

const route = new Routes();

// setup server class
class Server {
  constructor() {
    this.http = http;
    this.express = express;
    this.bodyParser = bodyParser;

    this.logger = morgan;
    this.route = route;
  }
  expressServer() {
    this.app = this.express();
    this.app.use(this.bodyParser.urlencoded({ extended: false }));
    this.app.use(this.bodyParser.json());
    //  this.app.set('port', 8080)
    // return this.app;
    this.app.get('/', (req, res) => {
      res.status(200).send({
        message: 'hello world',
      });
    });

    this.route.routes(this.app);
    return this.app;
  }
}

// let app = new Server();
// app = app.expressServer();
// export default app
export default Server;
