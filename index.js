const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

http.listen(4000, () => { console.log(`listen *:4000`) });