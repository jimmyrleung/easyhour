require('module-alias/register');
import * as http from 'http';
import express from './express';

import { SystemConstants } from './app/constants/index';

const server = http.createServer(express);

server.listen(SystemConstants.APPLICATION_PORT, () => {
    console.log(SystemConstants.LAUNCH_MESSAGE);
});