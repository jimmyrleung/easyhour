import { User } from "./index";
import * as KnexClient from 'knex';
import { BaseKnex } from "../../base/index";

export class UserDAO {

    static dbQueryBuilder() {
        return BaseKnex.getQueryBuilder("user");
    }

    static async isUserAlreadyRegistered(u: User): Promise<boolean> {
        const countResult = await this.dbQueryBuilder()
            .where('login', u.login).orWhere('email', u.email).count();
        console.log(countResult);
        return countResult[0]["count(*)"] > 0;
    }

    static async create(u: User, trx?: KnexClient.Transaction) {
        return trx ?
            this.dbQueryBuilder().insert(u).transacting(trx) :
            this.dbQueryBuilder().insert(u);
    };

};