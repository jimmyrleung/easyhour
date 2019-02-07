import { Company, CompanyDAO } from "./index";


export class CompanyService {

    static async create(company: Company) {
        const companyDAO = new CompanyDAO();
        return await companyDAO.create(company);
    };

};