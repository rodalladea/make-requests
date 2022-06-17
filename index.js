const express = require('express');

const app = express();

app.use(express.json());

let data = { data: 'nothing' };

app.post('/', (req, res) => {
    data = req.body;

    res.end();
});

app.get('/', (req, res) => {
    data = { data: req.headers['x-forwarded-for'] || req.connection.remoteAddress };

    res.end();
});

app.post('/clean', (req, res) => {
    data = { data: 'cleaned' };

    res.end();
});

app.get('/data', (_, res) => {
    res.send(data);
});

app.post('/facebook', (req, res) => {
    data = req.body;
    res.end();
});

app.get('/facebook', (req, res) => {
    data = req.query;
    res.send(req.query['hub.challenge']);
});

app.listen(process.env.PORT || '8080');