import { Config as KnexConfig } from 'knex';

const APPLICATION_PORT: number = 3000;

const LAUNCH_MESSAGE: string = "EasyHour running on port 3000...";

// TODO: move to Config folder and override development config when test, staging or production
const MYSQL_DATABASE_CONFIG: KnexConfig = {
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
};

export const SystemConstants = {
    APPLICATION_PORT,
    LAUNCH_MESSAGE,
    MYSQL_DATABASE_CONFIG
};