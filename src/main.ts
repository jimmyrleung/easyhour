import * as dotenv from 'dotenv';
dotenv.config();

import * as http from 'http';
import express from './express';

import { systemConstants } from './app/constants/index';
import { config } from './app/config';

const server = http.createServer(express);

server.listen(config.APPLICATION_PORT, () => {
    console.log(systemConstants.LAUNCH_MESSAGE);
});