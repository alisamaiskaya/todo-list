const { Router } = require('express');
const TasksModel = require('../models/tasks');
const { prepareParamsId } = require('../middlewares/prepare-params-id');
const { pickTasksFieldsAndCheck } = require('../middlewares/pick-fields');
const { requiredFields } = require('../middlewares/required-fields');

const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks = await TasksModel.findAll();

    res.json({
        data: tasks,
    });
});

router.get('/tasks/:id', prepareParamsId, async (req, res) => {
    const [task] = await TasksModel.findById(req.params.id);

    res.json({
        data: task,
    });
});

router.post('/tasks',requiredFields, pickTasksFieldsAndCheck, async (req, res) => {
    const [task] = await TasksModel.addTask(req.body.text);

    res.json({
        data: task,
    });
});

router.put(
    '/tasks/:id',
    prepareParamsId,
    pickTasksFieldsAndCheck,
    async (req, res) => {
        const [task] = await TasksModel.update(req.params.id, req.body);

        res.json({
            data: task,
        });
    },
);

router.delete('/tasks/:id', prepareParamsId, async (req, res) => {
    const [task] = await TasksModel.deleteTask(req.params.id);

    res.json({
        data: task
    });
});

module.exports = {
    router
};