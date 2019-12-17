const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter =require('./controllers/tasks');

const app = express();

app.use(bodyParser.json());
app.use(tasksRouter.router);

app.get('/name', (req, res) => {
    const n = req.query.n;

    res.send(`Привет, ${n}!`);
});

app.listen(8080, () => {
    console.log('Server is running!');
});