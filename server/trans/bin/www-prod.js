'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('./../src/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app2.default();
app = app.expressServer();
var port = parseInt(process.env.PORT) || 8080;
var server = _http2.default.createServer(app);
server.listen(port);
console.log('server start on port ' + port);
//# sourceMappingURL=www-prod.js.map