'use strict';

const PORT = process.env.PORT || 3001;
const app = require('./src/app');

app.startServer(PORT);
