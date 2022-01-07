var express = require('express')
var app = express()

var port = 3000
app.set('view engine','pug')
app.set('views','./views')
app.get('/', function(req, res){
    res.render('index', {
        name:'Hien'
    })
})

app.get('/users', function(req, res){
    res.send('User list')
}) 
app.get('/users/search', function(req, res){
    console.log(req.query)
})
app.listen(port, function(){
    console.log("Server listening on port", port)
} )

