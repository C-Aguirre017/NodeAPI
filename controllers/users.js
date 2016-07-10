var express = require('express');
var userRouter = express.Router();
var userModel = require("./../models/user");

function setUser(req){

}

//GET /Users
userRouter.get("/",function(req,res){
    var response = {};
    userModel.find({},function(err,data){
        if(err) {
            response = {"error" : true, "message" : "Error fetching data"};
        } else {
            response = {"error" : false, "message" : data};
        }
        res.json(response);
    });
})

//POST /Users
userRouter.post("/", function(req,res){
    var newUser = new userModel();
    newUser.name =  req.body.name;
    newUser.last_name =  req.body.last_name;
    newUser.email =  req.body.email;
    /*password =  require('crypto').createHash('sha1')
                                 .update(req.body.password)
                                 .digest('base64');*/

    newUser.save(function(err,user){
        if(err) {
            response = {"error" : true, "message" : "Error adding data"};
        } else {
            response = {"error" : false,"message" : user};
        }
        res.json(response);
    });
});


module.exports = userRouter
