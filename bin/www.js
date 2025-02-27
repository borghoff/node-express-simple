#!/usr/bin/env node

/**
 * Module dependencies.
 */

import {app} from "../app.js";
import http from 'http';

http.createServer(app).listen(process.env.PORT);

/**
 * Listen on provided port, on all network interfaces.
 */

console.log('server running on port ' + process.env.PORT);