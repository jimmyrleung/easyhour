import { Company } from "./index";
import * as KnexClient from 'knex';
import { BaseKnex } from "../../base/index";

export class CompanyDAO {

    static dbQueryBuilder() {
        return BaseKnex.getQueryBuilder("company");
    }

    static async isCompanyAlreadyRegistered(c: Company): Promise<boolean> {
        const countResult = await this.dbQueryBuilder()
            .where(function () {
                this.where('companyName', c.companyName).orWhere('registerNumber', c.registerNumber)
            })
            .andWhere({ active: true }).count();
        console.log(countResult);
        return countResult[0]["count(*)"] > 0;
    }

    static async create(c: Company, trx?: KnexClient.Transaction) {
        return trx ?
            this.dbQueryBuilder().insert(c).transacting(trx) :
            this.dbQueryBuilder().insert(c);
    };

};