var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/buyNoMore');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  username: {
    first: String,
    last: String 
  },
  Password:  {
    type: String,
    required: true
  } ,
//need the validation 
  PhoneNum: String,
  location: {
    alt : Number,
    lat: Number
  } ,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  }
});

var User = mongoose.model('User', userSchema);
var user = new User ({
  username: {
    first: 'Ayman',
    last: 'Sami' 
  },
  Password:  '1965' ,
  PhoneNum: '078951111',
  location: {
    alt : 1010,
    lat: 10
  } 
})
var save = function(callback){
  user.save(function(err,data){
    if (err){
      callback(err, null);
      } else {
      callback(null, data);
      }
    
  })
}



var selectAll = function(callback) {
  User.find({}, function(err, users) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};

module.exports.selectUser = selectUser;
module.exports.save = save;