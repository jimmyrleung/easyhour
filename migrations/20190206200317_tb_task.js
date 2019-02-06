
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('task', (table) => {
            table.increments('id', 11).primary().unsigned();
            table.integer('projectId').unsigned().notNull();
            table.varchar('title', 20).notNull();
            table.varchar('description', 200).notNull();
            table.datetime('createdAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.datetime('updatedAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.foreign('projectId').references('project.id');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('task');
};
