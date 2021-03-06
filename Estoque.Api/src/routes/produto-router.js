'use strict'

const express = require('../../node_modules/express');
const router = express.Router();
const controller = require('../controller/produto-controller')



router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);


module.exports = router;