// import modules
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// setup server class
class Server {
    constructor(){
      this.http = http;
      this.express = express;
      this.bodyParser = bodyParser;
      this.logger = morgan;
    }
    expressServer() {
        this.app = express();
        this.app.use(this.bodyParser.urlencoded({extended:true}));
        this.app.use(this.bodyParser.json());
        this.app.get('/', (req, res) => {
        res.status(200).send('Welcom to Eventmanager');
        });
     
        });
        return this.app;
    }
}

let app = new Server();

app = app.expressServer();
export default app
