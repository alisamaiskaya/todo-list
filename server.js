const express = require('express');
const bodyParser = require('body-parser');
const TasksModel = require('./models/tasks');


const app = express();

app.use(bodyParser.json());

app.get('/name', (req, res) => {
    const n = req.query.n;

    res.send(`Hello, ${n}!`);
});

app.get('/tasks', async (req, res) => {
    const tasks = await TasksModel.findAll();

    res.json({
        data: tasks,
    });
});

app.get('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const [task] = await TasksModel.findById(id);

    res.json({
        data: task,
    });
});

app.post('/tasks', async (req, res) => {
    const [task] = await TasksModel.addTask(req.body.text);

    res.json({
        data: task,
    });
});

app.put('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const [task] = await TasksModel.update(id, req.body);
    
    res.json({
        data: task,
    });
});

app.delete('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const [task] = await TasksModel.deleteTask(id);

    res.json({
        data: task
    });
});

app.listen(8080, () => {
    console.log('Server is running!');
});