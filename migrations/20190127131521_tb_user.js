
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', (table) => {
            table.increments('id', 11).primary().unsigned();
            table.varchar('name', 80).notNull();
            table.varchar('login', 20).notNull().unique();
            table.varchar('password', 20).notNull();
            table.varchar('email', 50).notNull().unique();
            table.boolean('active').defaultTo(true).notNull();
            table.datetime('createdAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.datetime('updatedAt', 6).defaultTo(knex.fn.now(6)).notNull();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user');
};
