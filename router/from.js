var express = require('express');
var router = express.Router();
const db = require('../util/database')


router.get('/',function(req,res){
    res.render('form',{foo:'execute form'});
});

router.post('/', (req, res) => {
    console.log('');
});


module.exports = router;