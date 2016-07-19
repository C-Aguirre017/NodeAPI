var express = require('express');
var router = express.Router();

// Call different Routes
router.get('/',function(req,res){
    //res.render('index');
    res.json({'error' : false, 'message' : 'Welcome'});
});

//Users
var userCtrl = require('./../controllers/usersController');

router.route('/users')
      .get(userCtrl.findAll)
      .post(userCtrl.create)

router.route('/users/:id')
      .get(userCtrl.findById)
      .put(userCtrl.update)
//      .delete(userCtrl.delete);

//Form
var formCtrl = require('./../controllers/formsController');
router.route('/users/:user_id/forms')
      .get(formCtrl.findAll)
      .post(formCtrl.create)

router.route('/users/:user_id/forms/:id')
      .get(formCtrl.findById)

router.route('/users/:user_id/forms/:id/new_question')
      .post(formCtrl.addQuestion)

router.route('/users/:user_id/forms/:id/new_answer')
      .post(formCtrl.addAnswer)

router.route('/users/:user_id/forms/:id/toggle')
      .post(formCtrl.toggleForm)

module.exports = router
