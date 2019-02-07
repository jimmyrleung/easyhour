import * as Express from 'express';
import { CompanyController } from './CompanyController';

export class CompanyRoute {

    static RegisterCompanyRoutes(app: Express.Application) {
        app.route("/companies")
            .get(CompanyController.create);
    }

}