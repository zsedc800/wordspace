const express = require('express');
const articleController = require('./controller/article');
const webController = require('./controller/web');
const userController = require('./controller/user');
const router = express.Router();

//文章相关
router.get('/articles', articleController.index);
router.get('/article/:id', articleController.show);
router.post('/delete/article/:id', articleController.delete);
router.post('/create/article', articleController.create);
router.post('/update/article/:id', articleController.update);

// website info
router.get('/webinfo', webController.index);
router.post('/update/webinfo', webController.update);

//user 相关
router.get('/user/:loginname', userController.show);
router.post('/delete/user/:id', userController.delete);
router.post('/update/user/:id', userController.update);
router.post('/create/user', userController.create);

//评论相关

// 资源上传相关
// router.post('/upload/:type/:encode', )

module.exports = router;
