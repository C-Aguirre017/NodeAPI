var mongoose = require('mongoose');
var formModel = require('./../models/form');

//GET /users/:user_id/forms
exports.findAll = function(req,res){
  var response = {};
  formModel.find({ user_id: req.params.user_id}).populate('user_id').exec(function(err,forms){
      if(err) {
          response = {'error' : true, 'message' : 'Error fetching data'};
      } else {
          response = {'error' : false, 'message' : forms};
      }
      res.json(response);
  });
};

//POST /users/:user_id/forms
exports.create = function(req,res){
    var newForm = new formModel(req.body);
    newForm.user_id= req.params.user_id;
    newForm.link= generateUniqueName();

    newForm.save(function(err,form){
        if(err) {
            response = {'error' : true, 'message' : 'Error adding data'};
        } else {
            response = {'error' : false,'message' : form};
        }
        console.log('Form: \n');
        console.log(JSON.stringify(newForm, null, "\t"))
        res.json(response);
    });
};

//GET  /users/:user_id/forms/:id
exports.findById = function(req,res){
    formModel.findById(req.params.id,function(err,form){
        if(err) {
            response = {'error' : true, 'message' : 'Error fetching data'};
        } else {
            response = {'error' : false, 'message' : form};
        }
        res.json(response);
    });
};

//POST  /users/:user_id/forms/:id/new_question
exports.addQuestion = function(req,res){
    formModel.update(
      { _id: req.params.id,
        user_id: req.params.user_id,
        alive: false
      },
      { $push: { 'questions' : req.body.question }},
      { upsert: true },
      function(err, data) {
         if(err) {
             response = {'error' : true, 'message' : 'Error fetching data'};
         } else {
             response = {'error' : false, 'message' : data};
         }
         res.json(response);
    });
};

//POST  /users/:user_id/forms/:id/toggle
exports.toggleForm = function(req,res){
  formModel.findById({ _id : req.params.id , user_id: req.params.user_id}, function(err,form){
      if(err) {
          response = {'error' : true, 'message' : 'Error fetching data'};
      } else {
          form.alive = !form.alive;
          form.save(function(err) {
            if(err){
                response = {'error' : true, 'message' : 'Error fetching data'};
            } else {
              response = {'error' : false, 'message' : form};
            }
          });
      }
      res.json(response);
  });
};

//POST  /users/:user_id/forms/:id/new_answer
exports.addAnswer = function(req,res){
    console.log(req.body.answer);
    console.log(req.body.question_id);

    formModel.update({
      _id: req.params.id ,
      'questions._id': req.body.question_id
    },
    { $push: { 'questions.$.answers' : req.body.answer }},
    { upsert: true },
    function(err, data) {
          console.log(data);
         if(err) {
             response = {'error' : true, 'message' : 'Error fetching data'};
         } else {
             response = {'error' : false, 'message' : data};
         }
         res.json(response);
    });
};

//Methods
function generateUniqueName(){
  return "perro";
}
