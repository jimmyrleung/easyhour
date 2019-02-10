import * as Express from 'express';
import { CompanyController } from './CompanyController';
import { SystemRoutes } from '../constants/systemRoutes';

export class CompanyRoute {

    static RegisterCompanyRoutes(app: Express.Application) {
        app.route(SystemRoutes.BASE_COMPANIES_URL)
            .post(CompanyController.create);
    }

}