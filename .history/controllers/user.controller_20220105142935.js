// controller: to store logical function
var db = require("../db");

module.exports.index = function(req, res){
    res.render('users/index', {
        users: db.get('users').value()
    })
}

module.exports.create = function(req, res){
    res.render('users/create');
}

module.exports.search = function(req, res){
    var q =  req.query.q; 
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    }) 
    res.render('users/index',{
        users: matchedUsers
    })
}

module.exports.seeUser = function(req, res){
    var id = parseInt(req.params.id)
    // find first user with same id with searched id
    var user = db.get('users').value().find(el=> el.id ==id)
    res.render('users/view',{
        user: user
    }) 
}

module.exports.postCreate = function(req, res){
    req.body.id = shortid.generate();
    var newUser = req.body
    db.get('users').value().push(newUser);
    res.redirect('/users');
}