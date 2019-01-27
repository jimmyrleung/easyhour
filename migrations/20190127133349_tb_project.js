
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('project', (table) => {
            table.increments('id', 11).primary().unsigned();
            table.integer('customerId').unsigned().notNull();
            table.varchar('title', 20).notNull();
            table.varchar('description', 50).notNull();
            table.boolean('active').defaultTo(true).notNull();
            table.datetime('createdAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.datetime('updatedAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.foreign('customerId').references('customer.id');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
