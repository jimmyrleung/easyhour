import * as KnexClient from 'knex';
import { SystemConstants } from '../constants/index';

export class BaseService {

    protected knexTransaction() {
        return new Promise<KnexClient.Transaction>((resolve, reject) =>
            KnexClient(SystemConstants.MYSQL_DATABASE_CONFIG)
                .transaction((trx) => resolve(trx))
                .catch((err) => reject(err))
        )
    };

};