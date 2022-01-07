var express = require('express');
var app = express();
// to get "POST" value
var bodyParser = require('body-parser');
// shortid: to generate random id with length = 9
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



app.listen(port, function(){
    console.log("Server listening on port", port);
} )

