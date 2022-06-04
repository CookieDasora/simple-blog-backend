require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const Router = require('./routes');

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.disable('x-powered-by');
app.disable('transfer-encoding');

app.use(Router);

module.exports = app;
