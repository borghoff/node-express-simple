#!/usr/bin/env node

/**
 * Module dependencies.
 */


import {app} from "../main.js";
import http from 'http';

const port = 5060;

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

console.log('server running on port ' + port);