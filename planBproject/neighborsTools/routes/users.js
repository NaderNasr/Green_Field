var express = require('express');
var router = express.Router();

//var User = require('../models/Users')


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{id:1, name: "aaaaaaayman"}])
});
// router.get('/', function(req, res, next) {
//   //res.send('respond with a resource');
//   User.find(function(err, users){
//   	res.send(users);
//   });
// });

module.exports = router;
