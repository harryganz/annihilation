'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// App Wide Middlewares
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('listening on port ', port);
});
