var express = require('express');
var router = express.Router();
const db = require('../util/database')




router.get('/',function(req,res){
   res.render('listcustomer');
});

router.get('/list',function(req,res){
    db.execute('select * from Customers').then(([rows,fieldData])=>{
        console.log(rows);
       res.json(rows);
    });
});



module.exports = router;