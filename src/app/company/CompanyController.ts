import { CompanyService, Company } from "./index";

export class CompanyController {

    static async create(req, res) {
        const company = Object.assign(new Company(), {
            companyName: "Test Company",
            tradingName: "Test Company",
            zipcode: "04110040",
            registerNumber: "01291092019029"
        });

        await CompanyService.create(company);
        res.status(204).json();
    }

}