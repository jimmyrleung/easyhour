
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user_task', (table) => {
            table.integer('userId').unsigned().notNull();
            table.integer('taskId').unsigned().notNull();
            table.datetime('createdAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.datetime('updatedAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.primary(['userId', 'taskId']);
            table.foreign('userId').references('user.id');
            table.foreign('taskId').references('task.id');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user_task');
};
