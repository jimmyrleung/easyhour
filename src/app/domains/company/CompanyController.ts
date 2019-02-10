import { User } from "../user/index";
import { CompanyService, Company } from "./index";
import { CustomErrorHandler } from "../../utils";

export class CompanyController {

    static async create(req, res) {
        try {
            const company = Object.assign(new Company(), req.body.company);
            const user = Object.assign(new User(), req.body.user);
            await CompanyService.create(company, user);
            res.status(204).json();
        }
        catch (ex) {
            CustomErrorHandler.handle(ex, res);
        }
    }

}