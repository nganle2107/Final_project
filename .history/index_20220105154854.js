var express = require('express');
var app = express();

var userRoute = require('./routes/users.route')
var port = 3000;

// to get "POST" value
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','pug');
app.set('views','./views');
// use stactic file named "public"
app.use(express.static("public"))
app.get('/', function(req, res){
    res.render('index', {
        name:'Hien'
    })
})

app.use("/users",userRoute)

app.listen(port, function(){
    console.log("Server listening on port", port);
} )

