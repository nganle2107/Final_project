var express = require('express');
var app = express();
// to get "POST" value
var bodyParser = require('body-parser');
// shortid: to generate random id
var shortid = require("shortid")
// use lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync("db.json");
const db = low(adapter)
db.defaults({ users:[] }).write();

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','pug');
app.set('views','./views');


app.get('/', function(req, res){
    res.render('index', {
        name:'Hien'
    })
})


app.get('/users', function(req, res){
    res.render('users/index', {
        users: db.get('users').value()
    })
}) 

app.get('/users/create', function(req, res){
    res.render('users/create');
}) 
app.post('/users/create', function(req, res){
    req.body.id = shortid.generate();
    db.get('users').value().push(req.body);
    res.redirect('/users');
}) 
app.get('/users/search', function(req, res){
    var q =  req.query.q; 
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    }) 
    res.render('users/index',{
        users: matchedUsers
    })
})

app.get('/users/:id', function(req, res){
    var id = parseInt(req.params.id)
    // find first user with same id with searched id
    var user = db.get('users').value().find(el=> el.id ==id)
    res.render('users/view',{
        user: user
    })
    
})
app.listen(port, function(){
    console.log("Server listening on port", port);
    console.log(shortid.generate().length)
} )

