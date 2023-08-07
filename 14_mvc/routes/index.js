const express = require('express');
const router = express.Router();
const controller = require('../controller/CComment')



//router 
router.get('/', controller.main);
//GET /commnets
router.get('/comments',controller.comments);


//GET /comment/:id
router.get('/comment/:id', controller.comment);
//module을 만들어서 내보낸다
module.exports = router;