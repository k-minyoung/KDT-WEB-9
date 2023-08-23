const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

router.get('/lists', controller.lists);

router.get('/add', controller.getadd)
router.post('/add', controller.add);
module.exports = router;
