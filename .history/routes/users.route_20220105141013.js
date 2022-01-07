var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('users/index', {
        users: db.get('users').value()
    })
}) 

router.get('/create', function(req, res){
    res.render('users/create');
}) 
router.post('/create', function(req, res){
    req.body.id = shortid.generate();
    var newUser = req.body
    console.log(newUser)
    db.get('users').value().push(newUser);
    res.redirect('/users');
}) 
router.get('/search', function(req, res){
    var q =  req.query.q; 
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    }) 
    res.render('users/index',{
        users: matchedUsers
    })
})

router.get('/:id', function(req, res){
    var id = parseInt(req.params.id)
    // find first user with same id with searched id
    var user = db.get('users').value().find(el=> el.id ==id)
    res.render('users/view',{
        user: user
    })
    
})

module.exports = router;