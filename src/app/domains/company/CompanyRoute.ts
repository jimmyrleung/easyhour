import * as Express from 'express';
import { companyController } from './companyController';

//https://github.com/Microsoft/TypeScript/issues/10866
import { routeConstants } from '../../constants';

const registerCompanyRoutes = (app: Express.Application) => {
    app.route(routeConstants.BASE_COMPANIES_URL)
        .post(companyController.create);
};

export const companyRoute = { registerCompanyRoutes };
