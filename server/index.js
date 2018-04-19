var express = require('express');
var bodyParser = require('body-parser');
//don't we need it !! 
var session = require('express-session');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var users = require('../database-mongo');

var app = express();

//app.use(express.static(__dirname + '/../react-client/dist'));


app.use(express.static(__dirname + '/../node_modules'));
////////////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
	users.selectUser(function(err, data) {
    if(err) {
    	console.log(err);
      res.sendStatus(500);
    } else {
    	console.log(data)
      res.json(data);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////
app.listen(3001, function() {
  console.log('listening on port 3001!');
});

app.post('/users', function (req, res) {
  users.save(function(err, data) {
    if(err) {
    	console.log(err);
      res.sendStatus(500);
    } else {
    	console.log(data)
      res.json(data);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////
//ADDED !!
//check the attributes !! 
app.get('/',function(req,res){
if (req.session.loggedIn){
  res.render('index')
} else {
  res.redirect('/login')
} 
})


app.get('/login', 
function(req, res) {
  res.render('login');
});


app.get('/signup', 
function(req, res) {
  res.render('signup');
});


app.post('/signup', 
function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var phoneNumber = req.body.phoneNumber;
  var location = req.body.location;

 
//for test : 
// console.log(username,password,email,phoneNumber,location)
  var newUser = new User({ user: username, pass: password, em: email, phnum: phoneNumber, loc: location  }).fetch().then(function(found) {
   
    if (found) {

      res.status(200).send(found);
    }  
       console.log(found);
        // be sure ,,should not be the type of the data ?!  
        Users.create({
          user: username,
          password: password,
          eamil: eamil,
          phoneNumber: phoneNumber,
          location: location
         
        })
        .then(function(newUser) {
          res.status(200).send(newUser);
        });
      
    


  });
});

app.get('/users', 
function(req, res) {
  Users.reset().fetch().then(function(users) {
      
    res.status(200).send(users);
  });
});

app.post('/login', 
function(req, res) {
  var username = req.body.username;
  var password = req.body.password; 

     Users.reset().fetch().then(function(users) {
      
    for (var i = 0; i < !!! ; i++) {
if (username === && password === ) {

    
        req.username = username;

        res.redirect('/');
        // should be our app page        
    
    }
    
    }
    
       res.redirect('login');
      
  });
   
});
 












