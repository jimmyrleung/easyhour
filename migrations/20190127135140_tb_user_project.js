
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user_project', (table) => {
            table.integer('userId').unsigned().notNull();
            table.integer('projectId').unsigned().notNull();
            table.datetime('createdAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.datetime('updatedAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.primary(['userId', 'projectId']);
            table.foreign('userId').references('user.id');
            table.foreign('projectId').references('project.id');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user_project');
};
