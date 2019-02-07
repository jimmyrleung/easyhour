import { Company } from "./index";
import { BaseDAO } from "../base/BaseDAO";

export class CompanyDAO extends BaseDAO<Company> {

    constructor() {
        super("company");
    };

};