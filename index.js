const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var numOfUsers = 0;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('new user', () => {
        console.log(numOfUsers);
        ++numOfUsers;
        console.log(numOfUsers);
        // broadcas.emit은 자신을 제외한 다른 곳에게 송출하는 것.
        socket.broadcast.emit('user joined', numOfUsers);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        // socket.broadcast.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        --numOfUsers;
        socket.broadcast.emit('user left', numOfUsers)
    });

});

http.listen(4000, () => { console.log(`listen *:4000`) });
