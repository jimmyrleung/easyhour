import * as KnexClient from 'knex';
import { config } from '../config';

export class BaseService {

    protected knexTransaction() {
        return new Promise<KnexClient.Transaction>((resolve, reject) =>
            KnexClient(config.MYSQL_DATABASE_CONFIG)
                .transaction((trx) => resolve(trx))
                .catch((err) => reject(err))
        )
    };

};