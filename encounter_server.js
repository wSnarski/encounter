var app = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log("A user connected");
  socket.on('event:new:message', function(data){
    socket.broadcast.emit('event:incoming:message', data);
  });
  socket.on('event:new:image', function(data){
    socket.broadcast.emit('event:incoming:image', data);
  });
});

server.listen(8000, function(){
  console.log('encounter running');
});
