var express = require('express');
var router = express.Router();



router.get('/',(req,res)=>{
    res.render('./index',{passStr:"pass from login route",obj:{foo:"FFF" , goo:"goo"}})
});

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('this round does not impemet yet.')
});


module.exports = router;