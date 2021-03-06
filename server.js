'use strict';

const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require(path.join(__dirname, 'sockets'));

// App Wide Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

// Attach the sockets
io.attach(server);

// Do routing on client-side
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('listening on port ', port);
});

module.exports = app;
