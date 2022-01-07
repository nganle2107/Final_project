var express = require('express')
var app = express()

var port = 3000
app.set('view engine','pug')
app.set('views','./views')

var users = [
    {id: 1, name: 'Hien'},
    {id: 1, name: 'Hien'},
]
app.get('/', function(req, res){
    res.render('index', {
        name:'Hien'
    })
})

app.get('/users', function(req, res){
    res.send('User list')
}) 
app.get('/users/search', function(req, res){
    var q = req.query.q; 
    var matchedUsers = 
    console.log(req.query)
})
app.listen(port, function(){
    console.log("Server listening on port", port)
} )

