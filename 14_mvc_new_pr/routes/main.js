const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원 전체 리스트
router.get('/lists', controller.lists);

//회원 정보 추가
router.get('/add', controller.getadd)
router.post('/add', controller.add);


module.exports = router;
