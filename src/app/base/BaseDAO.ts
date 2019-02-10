import * as KnexClient from 'knex';
import { SystemConstants } from '../constants/index'

export class BaseDAO<Entity>{

    private _knex: KnexClient;
    private _tableName: string;

    constructor(tableName: string) {
        this._tableName = tableName;
        this._knex = KnexClient(SystemConstants.MYSQL_DATABASE_CONFIG);
    };

    protected knex() {
        return this._knex(this._tableName);
    };

    async create(entity: Entity) {
        return this.knex().insert(entity);
    };

};