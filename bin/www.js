#!/usr/bin/env node

/**
 * Module dependencies.
 */


import {app} from "../app.js";
import http from 'http';

const port = 3000;

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);