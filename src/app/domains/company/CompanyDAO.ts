import { Company } from "./index";
import * as KnexClient from 'knex';
import { BaseKnex } from "../../base/index";

const dbQueryBuilder = () => {
    return BaseKnex.getQueryBuilder("company");
};

const isCompanyAlreadyRegistered = async (c: Company): Promise<boolean> => {
    const countResult = await dbQueryBuilder()
        .where(function () {
            this.where('companyName', c.companyName).orWhere('registerNumber', c.registerNumber)
        })
        .andWhere({ active: true }).count();

    return countResult[0]["count(*)"] > 0;
};

const create = async (c: Company, trx?: KnexClient.Transaction) => {
    return trx ?
        dbQueryBuilder().insert(c).transacting(trx) :
        dbQueryBuilder().insert(c);
};

export const companyDAO = {
    isCompanyAlreadyRegistered,
    create
};