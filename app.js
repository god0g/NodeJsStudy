var express = require('express');
var ejs = require('ejs');

var app = express();
app.set('view engine','ejs');

app.use(express.static('public'))

app.get('/',function(req,res){
    res.render('index',{foo:'execute from foo'});
});

app.get('/form',function(req,res){
    res.render('form',{foo:'execute form'});
});

app.listen(3000,()=>{
console.log('application listen on http://localhost:3000');
});

