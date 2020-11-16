const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article');
const multer = require('../middleware/multer-config');

router.post('/', multer, articleController.create);
router.get('/', articleController.getAll);
router.get('/:id', articleController.getOne);

module.exports = router
