const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
router.get('/login',controller.login)
router.post('/login',controller.post_login)
//회원가입
router.get('/register',controller.register)
router.post('/register',controller.post_register)
module.exports = router;
