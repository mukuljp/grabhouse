/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var http = require('http'),
        fs = require('fs'),
        // NEVER use a Sync function except at start-up!
        index = fs.readFileSync(__dirname + '/index.html');

// Send index.html to all requests
var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

// Send current time to all connected clients
function sendTime() {
    io.emit('time', {time: new Date().toJSON()});
}

// Send current time every 10 secs
setInterval(sendTime, 10000);

// Emit welcome message on connection
io.on('connection', function (socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', {message: 'Welcome!', id: socket.id});

    socket.on('i am client', console.log);
    socket.on("request_openh", function (data) {
        //console.log(data);
         io.sockets.emit('request_openh_seller', data);
    });
    socket.on("place_bid", function (data) {
             io.sockets.emit('place_bid_seller', data);
    });
    socket.on("activate_event", function (data) {
             io.sockets.emit('activate_event_seller', data);
    });
    socket.on("pay_token", function (data) {
             io.sockets.emit('pay_token_seller', data);
    });
    socket.on("deal_cancelled", function (data) {
             io.sockets.emit('deal_cancelled_seller', data);
    });
});


app.listen(3000);