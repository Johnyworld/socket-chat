const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('손님 입장');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        // socket.broadcast.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('들어올 땐 맘대로지만 나갈 땐 아니란다.')
    });

});

http.listen(4000, () => { console.log(`listen *:4000`) });
