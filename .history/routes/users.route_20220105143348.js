var express = require('express');
var router = express.Router();

// import controller
var controller = require("../controllers/user.controller")
router.get('/', controller.index) 

router.get('/create',controller.create) 

router.post('/create', controller.postCreate) 

router.get('/search', controller.search)

router.get('/:id', controller.seeUser)

module.exports = router;