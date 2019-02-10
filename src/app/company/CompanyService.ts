import { Company, CompanyDAO } from "./index";
import { CustomError } from "../utils/index";

export class CompanyService {

    static async create(company: Company) {
        const companyDAO = new CompanyDAO();
        if (await companyDAO.isCompanyAlreadyRegistered(company)) {
            throw new CustomError("Company already registered.", 403);
        }
        return await companyDAO.create(company);
    };

};