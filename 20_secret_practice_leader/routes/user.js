const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
router.get('/login',controller.getlogin)
router.post('/login',controller.login)
//회원가입
router.get('/register',controller.getregister)
router.post('/register',controller.register)
module.exports = router;
