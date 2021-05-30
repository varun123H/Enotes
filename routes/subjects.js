var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Welcome to ECE 4th sem myself HOD NK');
});

router.get('/signal', function(req, res){
    res.send('Welcome to SIGNALS AND SYSTEMS myself NAGARJU');
    });

router.get('/emft', function(req, res){
    res.send('Welcome to EMFT myself RAGHU J MANDYA ');
        });
router.get('/os', function(req, res){
    res.send('Welcome to OPERATING SYSTEM myself DEEPTI MS');
        
});
router.get('/arm', function(req, res){
    res.send('Welcome to ARM myself PARMESHWAR');
        
});
router.get('/analog', function(req, res){
    res.send('Welcome to ANALOG myself YAJUNATH');
        
});
router.get('/maths', function(req, res){
    res.send('Welcome to MATHS myself SANTOSH HB ');
        
});
//export this router to use in our index.js
module.exports = router;
