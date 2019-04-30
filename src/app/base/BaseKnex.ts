import * as KnexClient from 'knex';
import { config } from '../config';

export class BaseKnex {

    static getQueryBuilder(tableName): KnexClient.QueryBuilder {
        const connection = this.getConnection();
        return connection(tableName);
    }

    static getConnection(): KnexClient {
        return KnexClient(config.MYSQL_DATABASE_CONFIG);
    }

    static getTransaction(): Promise<KnexClient.Transaction> {
        return new Promise<KnexClient.Transaction>((resolve, reject) =>
            this.getConnection()
                .transaction((trx) => resolve(trx))
                .catch((err) => reject(err))
        )
    }
}