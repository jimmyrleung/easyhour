import { Config as KnexConfig } from 'knex';

export class SystemConstants {
    public static APPLICATION_PORT: number = 3000;

    // TODO: override development config when test, staging or production
    public static MYSQL_DATABASE_CONFIG: KnexConfig = {
        client: 'mysql',
        connection: {
            database: 'EasyHour',
            user: 'root',
            password: 'root'
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};