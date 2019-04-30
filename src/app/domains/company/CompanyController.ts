import { User } from "../user/index";
import { companyService, Company } from "./index";
import { customErrorHandler } from "../../utils";

const create = async (req, res) => {
    try {
        const company: Company =
            Object.assign(new Company(), req.body.company);

        if (company.isValid) {
            const user: User =
                Object.assign(new User(), req.body.user);
            await companyService.create(company, user);
            res.status(204).json();
        }
        else {
            customErrorHandler.handleModelError(company.errors, res);
        }
    }
    catch (ex) {
        customErrorHandler.handle(ex, res);
    }
}

export const companyController = { create };