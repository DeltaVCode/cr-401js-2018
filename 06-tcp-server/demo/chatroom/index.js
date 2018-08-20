'use strict';

const port = process.env.PORT || 3001;
const app = require('./src/app');

app.startServer(port);
