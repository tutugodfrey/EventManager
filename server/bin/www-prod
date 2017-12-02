
import http from 'http';
import Server from './../src/app';
let app = new Server();
app = app.expressServer();
const port = parseInt(process.env.PORT)|| 8080;
const server = http.createServer(app);
server.listen(port);
console.log(`server start on port ${port}`)