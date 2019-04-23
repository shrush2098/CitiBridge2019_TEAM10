const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Recom = require('../models/recom');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
var thisDay= dd+"-"+mm+"-"+yyyy;

// Register
router.post('/add', (req, res, next) => {
    let newRecom = new Recom({
      date:thisDay,
      uname: req.body.uname,
      sector: req.body.sector,
      company: req.body.company,
      growth: req.body.growth,
      close: req.body.close,
      high: req.body.high,
      low: req.body.low,
          
    });
  
    Recom.addRecom(newRecom, (err, recom) => {
      if(err){
        res.json({success: false, msg:'Failed to register user'});
      } else {
        res.json({success: true, msg:'recom registered'});
      }
    });
    
  });

  
router.get('/dis1', function(req, res, next) {
  Recom.find(function (err, recoms) {
    if (err) return next(err);
    res.json(recoms);
  });
});

router.delete('/:id', function(req, res, next) {
  Recom.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

