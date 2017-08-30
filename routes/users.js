var express = require('express');
var router = express.Router();
import moment from 'moment';
var timer = require('../controllers/timer');
import { db } from '../config/database.js';
var userscontroller = require('../controllers/userscontroller');


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(timer.setTime());
  res.send('Go on, specify something after the /');

});



/*
*   Call to find all users
*/
router.get('/findAllUsers', function (req, res, next){

  var resource = req.params.resource;
  console.log("finding..");

  userscontroller.findAllUsers(req.body, function(err, results){

      if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })

      return
    }

    res.json({
      confirmation: 'success',
      results: results
    })


  });

});



/*
*   Call to find a user by ID
*/
router.get('/findById', function (req, res, next){

  var resource = req.params.resource;
  console.log("finding..");

  userscontroller.findUserById(req.body, function(err, results){

      if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })

      return
    }

    res.json({
      confirmation: 'success',
      results: results
    })


  });

});



/*
*   Call to add a user
*/
router.post('/addUser', function(req, res, next) {

  console.log("In the /addUser router");
  
  userscontroller.addUser(req.body, function(err, results){

      if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })

      return
    }

    res.json({
      confirmation: 'success',
      results: results
    })


  });
});



/*
*   Call to delete a user
*/
router.get('/delete', function(req, res, next) {
  
  userscontroller.deleteUserById(req.body, function(err, results){

      if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })

      return
    }

    res.json({
      confirmation: 'success',
      results: results
    })


  });

});


/*
*   Call to update a user
*/
router.get('/update', function(req, res, next) {
  
  userscontroller.updateUser(req.body, function(err, results){

      if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })

      return
    }

    res.json({
      confirmation: 'success',
      results: results
    })


  });

});


module.exports = router;
