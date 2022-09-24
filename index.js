const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/sockets');


server.listen(process.env.PORT, (e) => {
    if (e) throw new Error(e);
    console.log('Server running on', process.env.PORT);
});