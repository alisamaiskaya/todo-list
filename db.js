const knexLib = require('knex');

const knex = knexLib({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'todo_db',
    },
});

module.exports = {
    knex,
};