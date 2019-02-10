import { CompanyService, Company } from "./index";
import { CustomError, CustomErrorHandler } from "../utils";

export class CompanyController {

    static async create(req, res) {
        try {
            const company = Object.assign(new Company(), {
                companyName: "Test Company",
                tradingName: "Test Company",
                zipcode: "04110040",
                registerNumber: "01291092019029"
            });

            await CompanyService.create(company);
            res.status(204).json();
        }
        catch (ex) {
            CustomErrorHandler.handle(ex, res);
        }
    }

}