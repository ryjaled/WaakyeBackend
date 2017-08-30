var express = require('express');
var router = express.Router();

import { db } from '../config/database.js';
var sellerscontroller = require('../controllers/sellerscontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/*
*   Call to find all sellers
*/
router.get('/findAllSellers', function (req, res, next){

  var resource = req.params.resource;
  console.log("finding..");

  sellerscontroller.findAllSellers(req.body, function(err, results){

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

  sellerscontroller.findSellerById(req.body, function(err, results){

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
router.post('/addSeller', function(req, res, next) {
  
  sellerscontroller.addSeller(req.body, function(err, results){

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
  
  sellerscontroller.deleteSellerById(req.body, function(err, results){

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
  
  sellerscontroller.updateSeller(req.body, function(err, results){

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
