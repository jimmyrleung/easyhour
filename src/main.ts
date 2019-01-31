import * as http from 'http';
import express from './express';

import { SystemConstants, SystemMessages } from './app/constants/index';

const server = http.createServer(express);

server.listen(SystemConstants.APPLICATION_PORT, () => {
    console.log(SystemMessages.LAUNCH_MESSAGE);
});