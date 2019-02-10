import * as Express from 'express';
import { CompanyRoute } from './app/domains/company/index';
import * as bodyParser from 'body-parser';
const express = Express();

express.use(bodyParser.json());

express.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

CompanyRoute.RegisterCompanyRoutes(express);

export default express;