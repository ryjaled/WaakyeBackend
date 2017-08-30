var express = require('express');
var router = express.Router();

import { db } from '../config/database.js';
var orderscontroller = require('../controllers/orderscontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/*
*   Call to find all orders
*/
router.get('/findAllOrders', function (req, res, next){

  var resource = req.params.resource;
  console.log("finding..");

  orderscontroller.findAllOrders(req.body, function(err, results){

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
*   Call to find an order by ID
*/
router.get('/findById', function (req, res, next){

  var resource = req.params.resource;
  console.log("finding..");

  orderscontroller.findOrderById(req.body, function(err, results){

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
router.post('/addOrder', function(req, res, next) {
  
  orderscontroller.addOrder(req.body, function(err, results){

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
*   Call to delete an order
*/
router.get('/delete', function(req, res, next) {
  
  orderscontroller.deleteOrderById(req.body, function(err, results){

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
*   Call to update an order
*/
router.get('/update', function(req, res, next) {
  
  orderscontroller.updateOrder(req.body, function(err, results){

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
