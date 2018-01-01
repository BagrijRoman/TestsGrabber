const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const api = require('./api');
const normalizePort = require('./util/normalizePort');


const port = normalizePort(process.env.PORT) || '3001';



const app = express();
app.set('port', port);

app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('/api', api);


app.use((req, res, next) => {
  const { ENV, PORT } = process.env;
  res.render('indexPage', { ENV, PORT: parseInt(PORT)+1 });
});




const server = http.createServer(app);
server.listen(port);

server.on('error', () => {
  console.log('server error');
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
});
