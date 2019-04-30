import { User } from "./index";
import * as KnexClient from 'knex';
import { BaseKnex } from "../../base/index";

const dbQueryBuilder = () => {
    return BaseKnex.getQueryBuilder("user");
}

const isUserAlreadyRegistered = async (u: User): Promise<boolean> => {
    const countResult = await dbQueryBuilder()
        .where('login', u.login).orWhere('email', u.email).count();

    return countResult[0]["count(*)"] > 0;
}

const create = async (u: User, trx?: KnexClient.Transaction) => {
    return trx ?
        dbQueryBuilder().insert(u).transacting(trx) :
        dbQueryBuilder().insert(u);
};

export const userDAO = {
    isUserAlreadyRegistered,
    create
};