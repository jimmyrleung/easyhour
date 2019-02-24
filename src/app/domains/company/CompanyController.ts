import { User } from "../user/index";
import { CompanyService, Company } from "./index";
import { CustomErrorHandler } from "../../utils";

export class CompanyController {

    static async create(req, res) {
        try {
            const company: Company =
                Object.assign(new Company(), req.body.company);

            if (company.isValid) {
                const user: User =
                    Object.assign(new User(), req.body.user);
                await CompanyService.create(company, user);
                res.status(204).json();
            }
            else {
                CustomErrorHandler.handleModelError(company.errors, res);
            }
        }
        catch (ex) {
            CustomErrorHandler.handle(ex, res);
        }
    }

}