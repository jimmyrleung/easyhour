
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('customer', (table) => {
            table.increments('id', 11).primary().unsigned();
            table.integer('companyId').unsigned().notNull();
            table.foreign('companyId').references('company.id');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('customer');
};
