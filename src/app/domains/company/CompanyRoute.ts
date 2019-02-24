import * as Express from 'express';
import { CompanyController } from './CompanyController';
import { RouteConstants } from '@constants';

export class CompanyRoute {

    static RegisterCompanyRoutes(app: Express.Application) {
        app.route(RouteConstants.BASE_COMPANIES_URL)
            .post(CompanyController.create);
    }

}