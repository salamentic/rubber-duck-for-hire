const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const rooms = [];
app.use(helmet());
app.use(bodyParse.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req,res) => {
    const qs  = rooms.map(q=> ({
        id: q.id,
        name: q.name
    }));
    res.send(qs);
});

app.get('/:id;', (req, res) => {
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
    };
    rooms.push(newRoom);
    res.status(200).send();
});

app.listen(8082, () =>
    {console.log('listening to port 8081');});
