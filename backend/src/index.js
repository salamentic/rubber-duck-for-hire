const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const rooms = [];
app.use(helmet());
app.use(bodyParse.json());
app.use(cors());
app.use(morgan('combined'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res) => {
    const qs  = rooms.map(q=> ({
        id: q.id,
        name: q.name
    }));
    res.send(qs);
});

app.get('/:id', (req, res) => {
    const room = rooms.filter(q =>( q.id === parseInt(req.params.id)));
    if(room.length > 1) return res.status(500).send();
    if(room.length === 0) return res.status(404).send();
    res.send(room[0]);
});

app.post('/', (req, res) => {
    const {name} = req.body;
    const newRoom = {
        id: rooms.length+1,
        name,
        messages : [],
    };
    rooms.push(newRoom);
    res.status(200).send();
});

app.post('/:id',(req, res) => {
    const {user, message} = req.body;
    const room = rooms.filter(q =>( q.id === parseInt(req.params.id)));
    if(room.length > 1) return res.status(500).send();
    if(room.length === 0) return res.status(404).send();
    room[0].messages.push({user, message});
    res.status(200).send();
});

io.on('connection', (socket) =>{
        socket.on('message', (data) => {
        socket.emit('sent', {
            username : data.username,
            message : data.message,
        });
    });
    console.log('a user is connected');
});

var server = app.listen(8082, () =>
    {console.log('listening to port 8081');});
