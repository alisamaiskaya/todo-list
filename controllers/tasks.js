const { Router } = require('express');
const TasksModel = require('../models/tasks');

const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks = await TasksModel.findAll();

    res.json({
        data: tasks,
    });
});

router.get('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const [task] = await TasksModel.findById(id);

    res.json({
        data: task,
    });
});

router.post('/tasks', async (req, res) => {
    const [task] = await TasksModel.addTask(req.body.text);

    res.json({
        data: task,
    });
});

router.put('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const [task] = await TasksModel.update(id, req.body);
    
    res.json({
        data: task,
    });
});

router.delete('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const [task] = await TasksModel.deleteTask(id);

    res.json({
        data: task
    });
});

module.exports = {
    router
};