var express = require('express');
var router = express.Router();
import { db } from '../config/database.js';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', function(req, res, next) {
  res.render('createuser', null);
});

router.get('/createorder', function(req, res, next) {
  res.render('createorder', null);
});

router.get('/createtransaction', function(req, res, next) {
  res.render('createtransaction', null);
});

router.get('/createseller', function(req, res, next) {
  res.render('createseller', null);
});

module.exports = router;
