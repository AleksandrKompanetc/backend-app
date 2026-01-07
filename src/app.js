const express = require('express');
const errorMiddleware = require('./middleware/error.middleware');

const userRoutes = require('./routes/user.routes');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);
app.use(errorMiddleware);

module.exports = app;