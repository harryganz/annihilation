'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// App Wide Middlewares
app.use(express.static(path.join(__dirname, 'public')));

// Do routing on client-side
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('listening on port ', port);
});
