
import http from 'http';
import Server from './../app';
let app = new Server();
app = app.expressServer();
const port = parseInt(process.env.PORT)|| 8080;
const server = http.createServer(app);
server.listen(port);
console.log(`server started on port ${port}`);