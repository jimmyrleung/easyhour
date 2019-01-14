import * as http from 'http';
import express from './express';

const server = http.createServer(express);

server.listen(3000, () => {
    console.log("EasyHour running on port 3000...");
});