
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('signing', (table) => {
            table.increments('id', 11).primary().unsigned();
            table.integer('userId').unsigned().notNull();
            table.integer('projectId').unsigned().notNull();
            table.datetime('signing', 6).notNull();
            table.datetime('createdAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.datetime('updatedAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.foreign('userId').references('user.id');
            table.foreign('projectId').references('project.id');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('signing');
};
