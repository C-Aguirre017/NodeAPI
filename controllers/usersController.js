var userModel = require('./../models/user');

//GET /users
exports.findAll = function(req,res){
  userModel.find({},function(err,user){
      if(err) {
          response = {'error' : true, 'message' : 'Error fetching data'};
      } else {
          response = {'error' : false, 'message' : user};
      }
      res.json(response);
  });
};

//POST /users
exports.create = function(req,res){
    var newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender
    });

    /*password =  require('crypto').createHash('sha1')
                                 .update(req.body.password)
                                 .digest('base64');*/

    newUser.save(function(err,user){
        if(err) {
            response = {'error' : true, 'message' : 'Error adding data'};
        } else {
            response = {'error' : false,'message' : user};
        }
        res.json(response);
    });
};

//GET  /users/:id
exports.findById = function(req,res){
    userModel.findById(req.params.id,function(err,user){
        if(err) {
            response = {'error' : true, 'message' : 'Error fetching data'};
        } else {
            response = {'error' : false, 'message' : user};
        }
        res.json(response);
    });
};

//PUT /users/:id
exports.update = function(req,res){
    
    userModel.findOneAndUpdate({ _id : req.params.id }, req.body, function(err,user){
        if(err) {
            response = {'error' : true, 'message' : 'Error fetching data'};
        } else {
            response = {'error' : false, 'message' : user};
        }
        res.json(response);
    });
};

//Delete /users/:id
exports.delete = function(req,res){
    userModel.findOneAndRemove({ _id : req.params.id }, function(err,user){
        if(err) {
            response = {'error' : true, 'message' : 'Error fetching data'};
        } else {
            response = {'error' : false, 'message' : 'User deleted!'};
        }
        res.json(response);
    });
};
