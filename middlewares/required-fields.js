const requiredFields = (req, res, next) => {
    const { taskDescription } = req.body;

    if (!('taskDescription' in req.body)) {
        next(new Error('Need enter sometext'));
        return;
    }

    req.body = { taskDescription};

    next();
}

module.exports = {
    requiredFields
};