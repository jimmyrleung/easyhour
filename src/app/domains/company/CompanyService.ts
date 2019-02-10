import { Company, CompanyDAO } from "./index";
import { CustomError } from "../../utils/index";
import { BaseService, BaseKnex } from "../../base/index";
import { User, UserDAO } from "../user/index";

export class CompanyService extends BaseService {

    static async create(company: Company, user: User) {

        if (await CompanyDAO.isCompanyAlreadyRegistered(company) || await UserDAO.isUserAlreadyRegistered(user)) {
            throw new CustomError("Company or user already registered.", 403);
        }

        const trx = await BaseKnex.getTransaction();
        try {
            await CompanyDAO.create(company, trx);
            await UserDAO.create(user, trx);
            trx.commit();
        }
        catch (ex) {
            trx.rollback();
            console.log(ex);
            throw new CustomError("An error occurred while trying to create a new company", 500);
        }
    };

};