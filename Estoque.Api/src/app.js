'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();

//conexao
mongoose.connect(config.connectionString);

//model
const Produto = require('./model/Produto');

//rotas
const indexRouter = require('./routes/index');
const produtoRota = require('./routes/produto-router');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



app.use('/',indexRouter);
app.use('/produto',produtoRota);

module.exports = app;