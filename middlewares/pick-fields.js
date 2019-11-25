const pickTasksFieldsAndCheck = (req, res, next) => {
    const { taskDescription, finished } = req.body;
    
    if ( 'taskDescription' in req.body && (typeof taskDescription !== 'string' || taskDescription === '')) {
        next(new Error('Field "taskDescription" must be a text'));
        return;
    }

    if (('finished' in req.body && typeof finished !== 'boolean')) {
        next(new Error('Field "finished" must be boolean'));
        return;
    }

    req.body = { taskDescription, finished };

    next();
}

module.exports = {
    pickTasksFieldsAndCheck
};