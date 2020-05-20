'use strict'

const express = require('../../node_modules/express');
const router = express.Router();


const route = router.get('/',(req, res, next) =>{
    res.status(200).send({
        Health: "UP",
        version: "dev 0.0.1"
    })
});

module.exports = router;