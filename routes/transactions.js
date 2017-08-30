var express = require('express');
var router = express.Router();

import { db } from '../config/database.js';
var transactionscontroller = require('../controllers/transactionscontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/*
*   Call to find all transactions
*/
router.get('/findAllTransactions', function (req, res, next){

  var resource = req.params.resource;
  console.log("finding..");

  transactionscontroller.findAll(req.body, function(err, results){

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
*   Call to find a seller by ID
*/
router.get('/findById', function (req, res, next){

  var resource = req.params.resource;
  console.log("finding..");

  transactionscontroller.findTransactionById(req.body, function(err, results){

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
*   Call to add a seller
*/
router.post('/addTransaction', function(req, res, next) {
  
  transactionscontroller.addTransaction(req.body, function(err, results){

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
*   Call to delete a seller
*/
router.get('/delete', function(req, res, next) {
  
  transactionscontroller.deleteTransactionById(req.body, function(err, results){

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
*   Call to update a seller
*/
router.get('/update', function(req, res, next) {
  
  transactionscontroller.updateTransaction(req.body, function(err, results){

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
