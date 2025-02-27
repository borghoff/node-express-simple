#!/usr/bin/env node

/**
 * Module dependencies.
 */

import {app} from "../app.js";
import http from 'http';

var port = (process.env.PORT || '8080');

http.createServer(app).listen(port);

/**
 * Listen on provided port, on all network interfaces.
 */

console.log('server running on port ' + port);