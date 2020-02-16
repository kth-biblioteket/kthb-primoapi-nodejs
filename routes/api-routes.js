let config = require('../configs/config');
let router = require('express').Router();

var VerifyToken = require('../auth/VerifyToken');

router.get('/', function(req, res) {
    res.send(`Hello! The API is at ${config.host}${config.apiroot}`);
});

var primoController = require('../controller/primoController');

router.get('/newbooks', primoController.getAllNewBooks)

router.get('/newbooks/book/:id', VerifyToken, primoController.getNewBookById)
    
module.exports = router;