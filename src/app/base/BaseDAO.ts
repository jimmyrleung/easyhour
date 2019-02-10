import * as KnexClient from 'knex';
import { BaseKnex } from './index'

export class BaseDAO<Entity> {

    private _knex: KnexClient;
    private _tableName: string;

    constructor(tableName: string) {
        this._tableName = tableName;
        this._knex = BaseKnex.getConnection();
    };

    protected knex() {
        return this._knex(this._tableName);
    };

    async create(entity: Entity, trx?: KnexClient.Transaction) {
        return trx ?
            this.knex().insert(entity).transacting(trx) :
            this.knex().insert(entity);
    };

    async update(entity: Entity, trx?: KnexClient.Transaction) {
        return trx ?
            this.knex().update(entity).transacting(trx) :
            this.knex().update(entity);
    };

};