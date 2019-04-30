import { Company, companyDAO } from "./index";
import { CustomError } from "../../utils/index";
import { BaseKnex } from "../../base/index";
import { User, userDAO } from "../user/index";

const create = async (company: Company, user: User) => {
    if (await companyDAO.isCompanyAlreadyRegistered(company) || await userDAO.isUserAlreadyRegistered(user)) {
        throw new CustomError("Company or user already registered.", 403);
    }

    const trx = await BaseKnex.getTransaction();
    try {
        await companyDAO.create(company, trx);
        await userDAO.create(user, trx);
        trx.commit();
    }
    catch (ex) {
        trx.rollback();
        console.log(ex);
        throw new CustomError("An error occurred while trying to create a new company", 500);
    }
}

export const companyService = { create };