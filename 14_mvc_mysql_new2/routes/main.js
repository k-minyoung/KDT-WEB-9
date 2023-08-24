const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입
router.get('/signup',controller.signup); //회원가입 페이지 열기
router.post('/signup',controller.post_signup); // 데이터베이스에 회원정보 저장
//로긴
router.get('/signin',controller.signin);//로그인 페이지 열기
router.post('/signin',controller.post_signin);


//회원정보수정 기능
//회원정보조회 => GET
//GET 조회 방식일때 url을 query string 또는 파라미터 방식으로 지정
//query string 방식은 페이지 이동 안함, 파라미터(params)는 이동함(res.render일 때)
router.get('/profile/:number', controller.profile)


//회원정보수정 => PATCH
router.patch('/profile/edit', controller.edit_profile)



module.exports = router;
