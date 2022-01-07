var express = require('express');
var router = express.Router();

// shortid: to generate random id with length = 9
var shortid = require("shortid");

var db = require("../db");
// import controller
var controller = require("../controllers/user.controller")
router.get('/', controller.index) 

router.get('/create',controller.create) 

router.post('/create', function(req, res){
    req.body.id = shortid.generate();
    var newUser = req.body
    db.get('users').value().push(newUser);
    res.redirect('/users');
}) 

router.get('/search', controller.search)

router.get('/:id', controller.seeUser)

module.exports = router;