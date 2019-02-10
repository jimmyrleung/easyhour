import { Company } from "./index";
import { BaseDAO } from "../base/BaseDAO";

export class CompanyDAO extends BaseDAO<Company> {

    constructor() {
        super("company");
    };

    async isCompanyAlreadyRegistered(c: Company): Promise<boolean> {
        const countResult = await this.knex()
            .where(function () {
                this.where('companyName', c.companyName).orWhere('registerNumber', c.registerNumber)
            })
            .andWhere({ active: true }).count();

        return countResult[0]["count(*)"] > 0;
    }

};