const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { logErrors, clientErrorHandler, errorHandler } = require('./middleware/handlerErrors');
require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(5000, () => {
    console.log("servidor corriendo");
})
module.exports = app;
