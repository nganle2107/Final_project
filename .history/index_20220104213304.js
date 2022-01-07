var express = require('express')
var app = express()
// to get "POST" value
var bodyParser = require('body-parser')

var port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug')
app.set('views','./views')

var users = [
    {id: 1, name: 'Hien'},
    {id: 2, name: 'Hieu'},
    {id: 3, name: 'Conmeo'},
]



app.get('/', function(req, res){
    res.render('index', {
        name:'Hien'
    })
})


app.get('/users', function(req, res){
    res.render('users/index', {
        users: users
    })
}) 

app.get('/users/create', function(req, res){
    res.render('users/create')
}) 
app.post('/users/create', function(req, res){
    console.log(req.body)
}) 
app.get('/users/search', function(req, res){
    var q =  req.query.q; 
    var matchedUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    }) 
    res.render('users/index',{
        users: matchedUsers
    })
})
app.listen(port, function(){
    console.log("Server listening on port", port)
} )

