import * as Express from 'express';
import { CompanyRoute } from './app/company/index';
const express = Express();

CompanyRoute.RegisterCompanyRoutes(express);

export default express;