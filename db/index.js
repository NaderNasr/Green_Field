var mongoose = require('mongoose');
//var mongoUri = 'mongodb://localhost/neighborsTools';
var mongoUri ='mongodb://root:123456@ds155699.mlab.com:55699/neighborstools'
// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("neighborsTools DataBase Connected")
});

module.exports = db;
