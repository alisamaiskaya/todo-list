const { knex } = require('../db');

function findAll() {
    return knex
        .select([
            'id', 
            'taskDescription',
            'createdAt',
            'finished',
            'updatedAt'
        ])
        .from('todos')
        .orderBy([
            {column: 'createdAt', order: 'desc'}, 
            {column: 'id', order: 'desc'}
        ]);
}

function findById(id) {
    return knex
    .select([
        'id',
        'taskDescription',
        'createdAt',
        'finished',
        'updatedAt'
    ])
    .from('todos')
    .where('id', id)
}

function addTask(taskDescription) {
    return knex
    .insert([{taskDescription}])
    .into('todos')
    .returning('*')
}

/**
 * 
 * @param {Integer} id
 * @param {Object} values 
 * @param {String} values.taskDescription
 * @param {Boolean} values.finished
 */
function update(id, values) {
    return knex('todos')
    .update({
        updatedAt: knex.fn.now(),
        ...values
    })
    .where('id', id)
    .returning('*')
}

function deleteTask(id) {
    return knex('todos')
    .delete()
    .where('id', id)
    .returning('*')
}

module.exports = { 
    findAll,
    findById,
    addTask,
    update,
    deleteTask
};