var express = require('express');
var router = express.Router();

// Call different Routes
router.get("/",function(req,res){
    res.json({"error" : false, "message" : "Hello World"});
});

router.use('/users', require('./users'))

module.exports = router
