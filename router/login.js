var express = require('express');
var router = express.Router();
const db = require('../util/database')


router.get('/',(req,res)=>{
    res.render('./login',{passStr:"pass from login route",obj:{foo:"FFF" , goo:"goo"}});
});

router.post('/', (req, res) => {

    db.execute('select * from SecurityUser where sUserName = ? and sPassword = ?',[req.body.inputEmail,req.body.inputPassword]).then(([rows,fieldData])=>{
        if(rows[0])
        {
            res.redirect('./form');
        }else{
            res.redirect('./login');
        }
    });
});


module.exports = router;