import * as Express from 'express';
import { companyRoute } from './app/domains/company';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

const express = Express();

express.use(helmet());
express.use(bodyParser.json());

express.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

companyRoute.registerCompanyRoutes(express);

export default express;