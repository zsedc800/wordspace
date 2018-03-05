const express = require('express');
const articleController = require('./controller/article');
const router = express.Router();

router.get('/articles', articleController.index);
router.get('/article/:id', articleController.show);
router.post('articles', articleController.create);
router.post('articles/update', articleController.update);

module.exports = router;