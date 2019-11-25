const prepareParamsId = (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (typeof id !== 'number' || isNaN(id)) {
        next(new Error('Id must be a number!'));
        return;
    }

    req.params.id = id;

    next();
}

module.exports = {
    prepareParamsId
};