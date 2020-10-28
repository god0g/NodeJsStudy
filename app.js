var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('Hello This is first start');
});

app.listen(3000,()=>{
console.log('application listen on http://localhost:3000');
});

