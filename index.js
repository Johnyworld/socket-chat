const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

http.listen(4000, () => { console.log(`listen *:4000`) });