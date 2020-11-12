const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article');

//router.post('/', articleController.create);
router.get('/', articleController.getAll);
router.get('/:id', articleController.getOne);

module.exports = router
