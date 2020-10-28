var express = require('express');
var path = require('path');
var ejs = require('ejs');
const bodyParser = require('body-parser');

var loginRoute = require('./router/login')

var app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.set('view engine','ejs');

app.use(express.static('public'))
app.use('/login',loginRoute);

app.get('/',(req,res)=>{
    res.redirect('/login');
});
app.get('/form',function(req,res){
    res.render('form',{foo:'execute form'});
});

app.get('/test',function(req,res){
    res.render('test',{test:'execute form'});
});
app.post('/test', function (req, res) {
    console.log(req.body);
    var objTest = {
        name: req.body.name,
        surname: req.body.surname
    }
    res.send('send from post test ' + JSON.stringify(objTest));

});


app.use((req,res,next)=>{
    res.status(400).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000,()=>{
console.log('application listen on http://localhost:3000');
});

