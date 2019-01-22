
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('company', (table) => {
            table.increments('id', 11).primary().unsigned();
            table.varchar('companyName', 80).notNull();
            table.varchar('tradingName', 80).notNull();
            table.varchar('zipcode', 20).notNull();
            table.varchar('registerNumber', 80).notNull(); // Ex: CNPJ
            table.boolean('active').defaultTo(true).notNull();
            table.boolean('isCustomer').defaultTo(false).notNull();
            table.datetime('createdAt', 6).defaultTo(knex.fn.now(6)).notNull();
            table.datetime('updatedAt', 6).defaultTo(knex.fn.now(6)).notNull();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('company');
};
