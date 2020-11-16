const express = require('express');

const app = express();

app.use(express.json());

let data = { data: 'nothing' };

app.post('/', (req, res) => {
    data = req.body;

    res.end();
});

app.get('/data', (_, res) => {
    res.send(data);
});

app.listen(process.env.PORT || '8080');